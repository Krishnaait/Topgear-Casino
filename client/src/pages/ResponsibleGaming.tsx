import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AlertCircle, Heart, Users, BookOpen, Phone } from "lucide-react";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-card/30 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Responsible Gaming</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            TOPGEAR Casino is committed to promoting responsible gaming. Learn how to play safely and enjoy our platform responsibly.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Commitment to Responsible Gaming</h2>
              <p className="text-muted-foreground mb-4">
                Although TOPGEAR Casino is a free-to-play platform with no real money involved, we believe it's important to promote healthy gaming habits. Responsible gaming means enjoying our games in a way that is fun, safe, and doesn't negatively impact your life.
              </p>
              <p className="text-muted-foreground">
                We are committed to providing a safe, fair, and enjoyable gaming environment for all players. This page provides information, resources, and guidance to help you make the most of your TOPGEAR Casino experience while maintaining a healthy balance.
              </p>
            </div>

            {/* Key Principles */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Key Principles of Responsible Gaming</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Heart className="w-8 h-8 text-primary" />,
                    title: "Play for Fun",
                    description: "Enjoy games as entertainment, not as a way to make money or solve financial problems.",
                  },
                  {
                    icon: <AlertCircle className="w-8 h-8 text-primary" />,
                    title: "Know Your Limits",
                    description: "Set personal time and coin limits. Stick to them and take regular breaks.",
                  },
                  {
                    icon: <Users className="w-8 h-8 text-primary" />,
                    title: "Stay in Control",
                    description: "Gaming should never interfere with work, school, relationships, or responsibilities.",
                  },
                  {
                    icon: <BookOpen className="w-8 h-8 text-primary" />,
                    title: "Stay Informed",
                    description: "Understand game rules, odds, and mechanics. Make informed decisions about your play.",
                  },
                ].map((principle, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-lg p-6">
                    <div className="mb-4">{principle.icon}</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground text-sm">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Setting Limits */}
            <div className="bg-card/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Setting Limits and Boundaries</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Time Limits</h3>
                  <p className="text-muted-foreground mb-4">
                    Set a specific amount of time you want to spend gaming and stick to it. Gaming should be one of many activities in your life, not the primary focus.
                  </p>
                  <div className="bg-card border border-border rounded p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Suggestion:</strong> Limit gaming sessions to 30-60 minutes at a time. Take a 15-minute break after each session. Avoid gaming late at night or when you should be sleeping.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Coin Budget</h3>
                  <p className="text-muted-foreground mb-4">
                    Even though coins are virtual, it's good practice to manage them responsibly. Don't feel pressured to use all available coins.
                  </p>
                  <div className="bg-card border border-border rounded p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Suggestion:</strong> Decide how many coins you're comfortable using per session. If you run out, take a break instead of immediately using the reset bonus. Save bonuses for when you want to play later.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Frequency</h3>
                  <p className="text-muted-foreground mb-4">
                    Avoid playing too frequently. Gaming should be an occasional activity, not a daily habit.
                  </p>
                  <div className="bg-card border border-border rounded p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Suggestion:</strong> Consider limiting gaming to specific days of the week. For example, play on weekends only, or 2-3 times per week. This helps maintain balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Signs */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Warning Signs of Problem Gaming</h2>
              <p className="text-muted-foreground mb-6">
                While TOPGEAR Casino is free and involves no real money, some behaviors may indicate unhealthy gaming habits. Be aware of these warning signs:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Spending more time gaming than intended",
                  "Thinking about gaming when not playing",
                  "Gaming to escape problems or negative feelings",
                  "Neglecting work, school, or responsibilities",
                  "Reducing time with family and friends",
                  "Lying about gaming habits to others",
                  "Feeling irritable when unable to play",
                  "Constantly increasing gaming time",
                  "Ignoring sleep or health needs to play",
                  "Using gaming as the primary form of entertainment",
                  "Difficulty stopping or taking breaks",
                  "Gaming affecting your mood or mental health",
                ].map((sign, idx) => (
                  <div key={idx} className="bg-card border border-border rounded p-4">
                    <p className="text-muted-foreground text-sm">• {sign}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-destructive/10 border border-destructive rounded-lg p-4">
                <p className="text-sm text-foreground">
                  <strong>If you notice any of these signs in yourself or someone else, it may be time to seek help or take a break from gaming.</strong>
                </p>
              </div>
            </div>

            {/* Healthy Gaming Tips */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Tips for Healthy Gaming</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Understand the Odds",
                    description: "Know that all games are games of chance. There's no strategy that guarantees winning. Outcomes are random and unpredictable.",
                  },
                  {
                    title: "Never Chase Losses",
                    description: "If you lose coins, don't try to immediately win them back by playing more. Accept the loss and move on. Take a break.",
                  },
                  {
                    title: "Play for Entertainment",
                    description: "Enjoy the games for what they are—entertainment. Don't play with the expectation of making money or solving financial problems.",
                  },
                  {
                    title: "Maintain Balance",
                    description: "Keep gaming as just one of many activities in your life. Pursue other hobbies, spend time with loved ones, and stay active.",
                  },
                  {
                    title: "Use Reminders",
                    description: "Set alarms or reminders to help you stick to your time limits. Use your phone's timer to track gaming sessions.",
                  },
                  {
                    title: "Take Breaks",
                    description: "Step away from the platform regularly. Take breaks between sessions. Avoid gaming when tired, stressed, or emotional.",
                  },
                  {
                    title: "Talk About It",
                    description: "If gaming is becoming a concern, talk to someone you trust—a friend, family member, or counselor.",
                  },
                  {
                    title: "Seek Support",
                    description: "If you feel gaming is becoming problematic, reach out to support organizations. There are resources available to help.",
                  },
                ].map((tip, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Resources */}
            <div className="bg-card/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Support and Resources</h2>
              <p className="text-muted-foreground mb-6">
                If you or someone you know is struggling with gaming habits, help is available. Here are resources that can provide support:
              </p>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Gamblers Anonymous</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        A fellowship of men and women who share their experience, strength, and hope with each other to solve their common problem and help others recover from gambling addiction.
                      </p>
                      <p className="text-sm">
                        <strong>Website:</strong> <a href="https://www.gamblersanonymous.org" className="text-primary hover:underline">www.gamblersanonymous.org</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">National Council on Problem Gambling (NCPG)</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Provides information, resources, and support for people affected by problem gambling, including treatment referrals and helpline services.
                      </p>
                      <p className="text-sm">
                        <strong>Helpline:</strong> 1-800-GAMBLER (1-800-426-2537)<br />
                        <strong>Website:</strong> <a href="https://www.ncpg.org" className="text-primary hover:underline">www.ncpg.org</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">TOPGEAR Casino Support</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        If you have concerns about your gaming habits or need support, our team is here to help. Contact us anytime.
                      </p>
                      <p className="text-sm">
                        <strong>Email:</strong> support@topgear.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* For Parents and Guardians */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Information for Parents and Guardians</h2>
              <p className="text-muted-foreground mb-6">
                TOPGEAR Casino is restricted to users aged 18 and above. Parents and guardians play an important role in ensuring children don't access gaming platforms. Here's what you can do:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Monitor Internet Usage",
                    description: "Keep track of which websites your children visit. Use parental control software to restrict access to gaming sites.",
                  },
                  {
                    title: "Set Clear Rules",
                    description: "Establish clear rules about internet usage, screen time, and gaming. Discuss why these rules are important.",
                  },
                  {
                    title: "Educate About Risks",
                    description: "Talk to your children about the risks of gaming and the importance of healthy online habits.",
                  },
                  {
                    title: "Use Parental Controls",
                    description: "Enable parental controls on devices and routers to restrict access to gaming websites and apps.",
                  },
                  {
                    title: "Encourage Balance",
                    description: "Promote a healthy balance of activities including outdoor play, sports, hobbies, and time with family.",
                  },
                  {
                    title: "Lead by Example",
                    description: "Model healthy technology and gaming habits. Show your children how to use technology responsibly.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Commitment */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment to You</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TOPGEAR Casino is committed to providing a safe, fair, and responsible gaming environment. We take responsible gaming seriously and are dedicated to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing clear information about our games and odds</li>
                  <li>Offering resources and support for responsible gaming</li>
                  <li>Maintaining fair and transparent game mechanics</li>
                  <li>Protecting player privacy and security</li>
                  <li>Enforcing age restrictions to prevent access by minors</li>
                  <li>Continuously improving our platform and policies</li>
                </ul>
              </div>
            </div>

            {/* Final Message */}
            <div className="bg-card border-2 border-primary rounded-lg p-6">
              <p className="text-foreground font-semibold mb-2">
                Remember: Gaming should be fun and entertaining. If it ever stops being fun or starts causing problems, it's time to take a break.
              </p>
              <p className="text-muted-foreground text-sm">
                We're here to help. If you have any concerns or need support, don't hesitate to reach out to us at support@topgear.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
