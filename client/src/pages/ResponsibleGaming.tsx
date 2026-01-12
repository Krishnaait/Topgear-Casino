import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-card/30 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Responsible Gaming</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We're committed to promoting safe and responsible gaming practices.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          {/* Important Notice */}
          <div className="bg-card border-2 border-primary rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Important Notice</h2>
            <p className="text-muted-foreground mb-4">
              <strong>TOPGEAR Casino is for entertainment purposes only.</strong> This is a free-to-play social casino platform using virtual coins with no real-world value. No real money gambling is involved.
            </p>
            <p className="text-muted-foreground">
              Virtual coins cannot be withdrawn, sold, or exchanged for real money. They are purely for gameplay and entertainment.
            </p>
          </div>

          {/* Do's */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Best Practices</h2>
            <div className="space-y-4">
              {[
                "Play for fun and entertainment only",
                "Set time limits for your gaming sessions",
                "Take regular breaks while playing",
                "Remember that all games are games of chance",
                "Keep gaming as a hobby, not a source of income",
                "Enjoy the social aspects of gaming with friends",
                "Use the daily bonuses to extend your playtime",
                "Try different games to find what you enjoy most",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 bg-card border border-border rounded-lg p-4">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Don'ts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Things to Avoid</h2>
            <div className="space-y-4">
              {[
                "Never play with real money or attempt to convert coins to cash",
                "Do not chase losses by playing longer or betting more",
                "Avoid playing when stressed, upset, or under the influence",
                "Do not neglect responsibilities for gaming",
                "Never borrow money to play games",
                "Avoid playing if you feel you're developing unhealthy habits",
                "Do not encourage others to play excessively",
                "Never share your account with others",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 bg-card border border-border rounded-lg p-4">
                  <span className="text-2xl flex-shrink-0">✗</span>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Age Restriction */}
          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Age Restriction</h2>
            <p className="text-muted-foreground">
              <strong>TOPGEAR Casino is restricted to players aged 18 and above.</strong> We take age verification seriously and reserve the right to restrict access to underage users.
            </p>
          </div>

          {/* Healthy Gaming Habits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Healthy Gaming Habits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Time Management",
                  description: "Set daily or weekly time limits for gaming. Take regular breaks and do not let gaming interfere with sleep, work, or relationships.",
                },
                {
                  title: "Emotional Control",
                  description: "Do not play when you are upset, stressed, or depressed. Gaming should enhance your mood, not be used as an escape from problems.",
                },
                {
                  title: "Financial Awareness",
                  description: "Remember that virtual coins have no real value. Never attempt to purchase coins or convert them to real money.",
                },
                {
                  title: "Social Balance",
                  description: "Maintain balance with other activities. Spend time with family and friends, exercise, and pursue other hobbies.",
                },
                {
                  title: "Reality Check",
                  description: "Remember that games are based on chance. You will not always win, and that is normal. Enjoy the entertainment value.",
                },
                {
                  title: "Seek Help",
                  description: "If you feel gaming is becoming problematic, reach out to support services or talk to someone you trust.",
                },
              ].map((habit, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-bold text-foreground mb-2">{habit.title}</h3>
                  <p className="text-sm text-muted-foreground">{habit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Warning Signs */}
          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Warning Signs of Problem Gaming</h2>
            <p className="text-muted-foreground mb-4">
              If you experience any of the following, consider taking a break or seeking help:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Spending more time gaming than intended",
                "Thinking about gaming constantly",
                "Feeling anxious or irritable when not playing",
                "Neglecting personal relationships or responsibilities",
                "Using gaming to escape problems or negative emotions",
                "Feeling unable to control your gaming",
                "Lying to others about how much you play",
                "Experiencing negative impacts on work, school, or health",
              ].map((sign, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Resources */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Support Resources</h2>
            <p className="text-muted-foreground mb-6">
              If you need help with gaming habits, please reach out to these organizations:
            </p>
            <div className="space-y-4 text-muted-foreground text-sm">
              <p>
                <strong>National Council on Problem Gambling (USA):</strong> 1-800-GAMBLER
              </p>
              <p>
                <strong>Gamblers Anonymous:</strong> www.gamblersanonymous.org
              </p>
              <p>
                <strong>TOPGEAR Support:</strong> support@topgear.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
