import { Link } from "wouter";

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  comingSoon?: boolean;
}

export default function GameCard({ id, title, description, icon, href, comingSoon }: GameCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative p-6 flex flex-col h-full">
        {/* Icon */}
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-6 flex-grow">{description}</p>

        {/* Coming Soon Badge */}
        {comingSoon && (
          <div className="mb-4 inline-flex items-center gap-2 bg-muted/30 px-3 py-1 rounded-full border border-muted">
            <span className="text-xs font-semibold text-muted-foreground">Coming Soon</span>
          </div>
        )}

        {/* Button */}
        {!comingSoon ? (
          <Link href={href} className="inline-block w-full">
            <span className="inline-flex w-full items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded-md transition-colors">
              Play Now
            </span>
          </Link>
        ) : (
          <span className="inline-flex w-full items-center justify-center bg-muted text-muted-foreground font-semibold py-2 px-4 rounded-md cursor-not-allowed">
            Coming Soon
          </span>
        )}
      </div>
    </div>
  );
}
