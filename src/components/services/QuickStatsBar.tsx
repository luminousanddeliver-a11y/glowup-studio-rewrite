import { LucideIcon, Timer, Shield, Users, Award } from "lucide-react";

interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface QuickStatsBarProps {
  stats: Stat[];
}

export const QuickStatsBar = ({ stats }: QuickStatsBarProps) => {
  return (
    <section className="bg-secondary py-6 md:py-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-lg">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
