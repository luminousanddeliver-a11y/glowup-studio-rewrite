import { motion } from "framer-motion";
import { Award, Calendar, User } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  yearsExperience: number;
  specialties: string[];
}

interface TeamSectionProps {
  members?: TeamMember[];
}

const defaultTeam: TeamMember[] = [
  {
    name: "Senior Lead Aesthetician",
    role: "Clinic Director",
    yearsExperience: 20,
    specialties: ["Laser Hair Removal", "Advanced Skin Rejuvenation", "Injectables"]
  },
  {
    name: "Lead Laser Technician",
    role: "Laser Specialist",
    yearsExperience: 12,
    specialties: ["Tattoo Removal", "Pigmentation Treatment", "Vein Removal"]
  },
  {
    name: "Senior Skin Therapist",
    role: "Facial Specialist",
    yearsExperience: 8,
    specialties: ["Hydrafacials", "Chemical Peels", "Microneedling"]
  },
  {
    name: "Wellness Practitioner",
    role: "IV & Wellness",
    yearsExperience: 6,
    specialties: ["IV Drips", "Vitamin Infusions", "Holistic Wellness"]
  }
];

export const TeamSection = ({ members = defaultTeam }: TeamSectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-foreground mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-muted-foreground font-body">
            Our Level 4 qualified therapists bring decades of combined experience and genuine passion for aesthetic excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div 
              key={member.role}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Silhouette Avatar - Halal Compliant */}
              <motion.div 
                className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <User className="w-12 h-12 text-primary/50" />
              </motion.div>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              
              <p className="font-body text-accent font-medium text-sm mb-3">
                {member.role}
              </p>

              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                <span className="font-body text-sm">{member.yearsExperience}+ Years Experience</span>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {member.specialties.slice(0, 2).map((specialty) => (
                  <span 
                    key={specialty}
                    className="px-2 py-1 bg-secondary text-muted-foreground text-xs font-body rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Qualification Badge */}
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 bg-accent/10 px-6 py-3 rounded-full">
            <Award className="h-5 w-5 text-accent" />
            <span className="font-body text-foreground">
              All therapists hold <strong>Level 4 qualifications</strong> — the highest in the industry
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
