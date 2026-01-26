import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCart } from "@/contexts/CartContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().optional(),
  addressLine1: z.string().min(5, "Address is required").max(200),
  addressLine2: z.string().max(200).optional(),
  city: z.string().min(2, "City is required").max(100),
  postcode: z.string().min(3, "Postcode is required").max(20),
  sameAsBilling: z.boolean(),
  billingAddressLine1: z.string().max(200).optional(),
  billingAddressLine2: z.string().max(200).optional(),
  billingCity: z.string().max(100).optional(),
  billingPostcode: z.string().max(20).optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const FREE_SHIPPING_THRESHOLD = 50;
const SHIPPING_COST = 4.95;

export const CheckoutForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { cartItems, cartTotal, clearCart } = useCart();

  const shippingCost = cartTotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const orderTotal = cartTotal + shippingCost;

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      postcode: "",
      sameAsBilling: true,
      billingAddressLine1: "",
      billingAddressLine2: "",
      billingCity: "",
      billingPostcode: "",
    },
  });

  const sameAsBilling = form.watch("sameAsBilling");

  const onSubmit = async (data: CheckoutFormData) => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate order number
      const orderNumber = `LLSC-${Date.now().toString(36).toUpperCase()}`;

      const shippingAddress = {
        line1: data.addressLine1,
        line2: data.addressLine2 || null,
        city: data.city,
        postcode: data.postcode,
        country: "United Kingdom",
      };

      const billingAddress = data.sameAsBilling
        ? shippingAddress
        : {
            line1: data.billingAddressLine1 || data.addressLine1,
            line2: data.billingAddressLine2 || null,
            city: data.billingCity || data.city,
            postcode: data.billingPostcode || data.postcode,
            country: "United Kingdom",
          };

      // Create order in database
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          order_number: orderNumber,
          guest_name: data.name,
          guest_email: data.email,
          guest_phone: data.phone || null,
          shipping_address: shippingAddress,
          billing_address: billingAddress,
          subtotal: cartTotal,
          shipping_cost: shippingCost,
          total: orderTotal,
          status: "pending",
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = cartItems.map((item) => ({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        unit_price: item.salePrice ?? item.price,
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItems);

      if (itemsError) throw itemsError;

      // For now, simulate success (Stripe will be added later)
      toast.info("Stripe payment integration coming soon! Order saved.");
      
      clearCart();
      window.location.href = `/order-confirmation?order=${orderNumber}`;

    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Customer Information */}
        <div className="bg-card rounded-xl border border-border p-6 space-y-4">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Customer Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body">Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body">Email Address *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="jane@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body">Phone Number (optional)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="07123 456789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Shipping Address */}
        <div className="bg-card rounded-xl border border-border p-6 space-y-4">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Shipping Address
          </h2>

          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body">Address Line 1 *</FormLabel>
                <FormControl>
                  <Input placeholder="123 High Street" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="addressLine2"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body">Address Line 2</FormLabel>
                <FormControl>
                  <Input placeholder="Flat 2, Building Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body">City *</FormLabel>
                  <FormControl>
                    <Input placeholder="London" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="postcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body">Postcode *</FormLabel>
                  <FormControl>
                    <Input placeholder="RM8 1AB" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <p className="font-body text-sm text-muted-foreground">
            Shipping to United Kingdom only
          </p>
        </div>

        {/* Billing Address */}
        <div className="bg-card rounded-xl border border-border p-6 space-y-4">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Billing Address
          </h2>

          <FormField
            control={form.control}
            name="sameAsBilling"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="font-body !mt-0 cursor-pointer">
                  Same as shipping address
                </FormLabel>
              </FormItem>
            )}
          />

          {!sameAsBilling && (
            <div className="space-y-4 pt-4">
              <FormField
                control={form.control}
                name="billingAddressLine1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body">Address Line 1</FormLabel>
                    <FormControl>
                      <Input placeholder="123 High Street" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="billingAddressLine2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body">Address Line 2</FormLabel>
                    <FormControl>
                      <Input placeholder="Flat 2, Building Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="billingCity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">City</FormLabel>
                      <FormControl>
                        <Input placeholder="London" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="billingPostcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">Postcode</FormLabel>
                      <FormControl>
                        <Input placeholder="RM8 1AB" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting || cartItems.length === 0}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body h-14 text-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            `Pay £${orderTotal.toFixed(2)}`
          )}
        </Button>
      </form>
    </Form>
  );
};
