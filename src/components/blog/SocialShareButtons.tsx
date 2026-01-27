import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Link2, MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";

interface SocialShareButtonsProps {
  title: string;
  url: string;
}

export const SocialShareButtons = ({ title, url }: SocialShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  const shareLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "hover:bg-[#25D366] hover:text-white",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-[#1877F2] hover:text-white",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-[#1DA1F2] hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      color: "hover:bg-[#0A66C2] hover:text-white",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="sticky top-28 hidden lg:flex flex-col gap-3"
    >
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
        Share
      </span>
      
      {shareLinks.map((link, index) => (
        <Tooltip key={link.name}>
          <TooltipTrigger asChild>
            <motion.a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.1 * index }}
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-muted/80 text-muted-foreground transition-all duration-300 ${link.color} shadow-sm hover:shadow-md`}
              aria-label={`Share on ${link.name}`}
            >
              <link.icon className="h-4 w-4" />
            </motion.a>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Share on {link.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={copyToClipboard}
            className="w-10 h-10 rounded-full bg-muted/80 text-muted-foreground hover:bg-primary hover:text-primary-foreground shadow-sm hover:shadow-md"
            aria-label="Copy link"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Link2 className="h-4 w-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{copied ? "Copied!" : "Copy link"}</p>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
};
