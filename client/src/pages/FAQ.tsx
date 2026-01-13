import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What is TOPGEAR Casino?",
          a: "TOPGEAR Casino is a free-to-play social casino platform designed for entertainment purposes only. We offer casino games using virtual coins with no real-world value. No real money is involved, no registration is required, and you can start playing instantly.",
        },
        {
          q: "Do I need to create an account?",
          a: "No! One of the best things about TOPGEAR Casino is that you don't need to create an account or provide any personal information. Simply visit our website and start playing immediately. Your gaming session is stored locally on your device.",
        },
        {
          q: "Is TOPGEAR Casino free to play?",
          a: "Yes, absolutely! TOPGEAR Casino is 100% free. There are no hidden charges, no subscription fees, and no real money transactions. You start with 1,000 virtual coins and can play all games without spending anything.",
        },
        {
          q: "How do I start playing?",
          a: "Simply visit TOPGEAR Casino, and you'll immediately receive 1,000 virtual coins. Browse our games, select one you like, choose your bet amount, and start playing. It's that simple!",
        },
      ],
    },
    {
      category: "Virtual Coins & Balance",
      questions: [
        {
          q: "What are virtual coins?",
          a: "Virtual coins are the currency used in TOPGEAR Casino for gameplay. They have no real-world value and cannot be converted to real money, withdrawn, or used outside the platform. They exist purely for entertainment and gameplay purposes.",
        },
        {
          q: "How many coins do I start with?",
          a: "Every new player starts with 1,000 virtual coins at no cost. These coins are yours to use immediately to play any of our games.",
        },
        {
          q: "What happens when I run out of coins?",
          a: "When you've used all your coins, you have two options: (1) Claim your daily bonus of 200 coins from the Spin Wheel (available every 24 hours), or (2) Use the reset option to get 500 bonus coins to continue playing. You'll never be permanently out of coins!",
        },
        {
          q: "Can I buy more coins?",
          a: "No, coins cannot be purchased with real money. TOPGEAR Casino is designed to be completely free. You can only earn coins through gameplay wins, daily bonuses, and reset bonuses.",
        },
        {
          q: "Can I transfer coins to another player?",
          a: "No, coins cannot be transferred between players. Each player's balance is independent and cannot be shared or transferred.",
        },
        {
          q: "How often can I claim the daily bonus?",
          a: "You can claim the daily bonus once every 24 hours. Simply visit the Spin Wheel section and click to spin for your 200 free coins.",
        },
      ],
    },
    {
      category: "Games & Gameplay",
      questions: [
        {
          q: "What games are available?",
          a: "We currently offer 5 games: Blackjack (classic card game), Video Slots (spin and match), Roulette (pick a number), Spin Wheel (daily free bonus), and Keno (pick numbers and win). More games are coming soon!",
        },
        {
          q: "Can I play multiple games at once?",
          a: "You can play different games, but only one game at a time. Your coin balance is shared across all games, so winnings from one game can be used in another.",
        },
        {
          q: "Are the games fair?",
          a: "Yes, absolutely! All TOPGEAR Casino games use certified random number generators (RNG) to ensure fair and unpredictable outcomes. Every player has an equal chance of winning. We do not manipulate results or use hidden algorithms.",
        },
        {
          q: "What are the odds of winning?",
          a: "Each game has different odds. Blackjack depends on strategy and dealer play. Slots are purely random. Roulette offers 1 in 37 odds. Keno odds depend on how many numbers you select. Spin Wheel is guaranteed to pay out. Check the game details for specific information.",
        },
        {
          q: "Can I play on my mobile phone?",
          a: "Yes! TOPGEAR Casino is fully responsive and works perfectly on smartphones, tablets, and desktop computers. Simply visit our website on your mobile browser and start playing.",
        },
        {
          q: "Do I need to download an app?",
          a: "No app download is required. TOPGEAR Casino is a web-based platform that works directly in your browser. This makes it accessible from any device without installation.",
        },
        {
          q: "What is the minimum and maximum bet?",
          a: "Minimum and maximum bets vary by game. Most games allow bets starting from 10 coins and going up to 100+ coins. Check each game for specific betting limits.",
        },
      ],
    },
    {
      category: "Winnings & Payouts",
      questions: [
        {
          q: "How do I win coins?",
          a: "You win coins by playing games successfully. Each game has different winning conditions. For example, in Blackjack you win by beating the dealer, in Slots by matching symbols, and in Roulette by picking the correct number.",
        },
        {
          q: "How are winnings calculated?",
          a: "Winnings are calculated based on your bet amount and the game's payout multiplier. For example, if you bet 100 coins and win with a 2x multiplier, you receive 200 coins (your original bet plus 100 in winnings).",
        },
        {
          q: "Are winnings instant?",
          a: "Yes! Winnings are added to your balance instantly after each game round. You can immediately use your winnings to play another game or check your balance in the top right corner.",
        },
        {
          q: "Can I withdraw my coins?",
          a: "No, virtual coins cannot be withdrawn or converted to real money. They exist purely for gameplay and entertainment within TOPGEAR Casino.",
        },
        {
          q: "What if I lose my coins?",
          a: "Don't worry! If you lose all your coins, you can claim your daily 200-coin bonus from the Spin Wheel, or use the reset option to get 500 bonus coins. You'll always have a way to continue playing.",
        },
      ],
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          q: "Is my personal data safe?",
          a: "Yes, your data is safe. Since you don't need to sign up, we collect minimal personal information. All data is protected with industry-standard encryption and security measures. We never sell your information to third parties.",
        },
        {
          q: "Do you collect my personal information?",
          a: "Since registration is not required, we collect very little personal information. We may collect device information and usage data to improve our platform, but we never ask for sensitive information like credit cards or financial details.",
        },
        {
          q: "Is TOPGEAR Casino secure?",
          a: "Yes, TOPGEAR Casino uses SSL encryption, regular security audits, and industry-standard security practices to protect your experience. We take security very seriously.",
        },
        {
          q: "Do you use cookies?",
          a: "Yes, we use cookies to maintain your gaming session and remember your preferences. These are necessary for the platform to function properly. You can control cookies through your browser settings.",
        },
      ],
    },
    {
      category: "Age & Eligibility",
      questions: [
        {
          q: "What is the minimum age to play?",
          a: "TOPGEAR Casino is restricted to players aged 18 and above. We take age verification seriously and reserve the right to restrict access to underage users.",
        },
        {
          q: "Why is there an age restriction?",
          a: "Even though TOPGEAR Casino uses virtual coins with no real money involved, we maintain an 18+ age restriction to comply with gaming standards and promote responsible entertainment practices.",
        },
        {
          q: "Can parents monitor their children's access?",
          a: "Yes, parents and guardians are encouraged to monitor their children's internet usage. Since TOPGEAR Casino is web-based, you can use parental controls on your device or router to restrict access.",
        },
      ],
    },
    {
      category: "Responsible Gaming",
      questions: [
        {
          q: "What is responsible gaming?",
          a: "Responsible gaming means enjoying games as entertainment while maintaining control and balance. It includes setting time limits, managing your coin budget, taking breaks, and seeking help if gaming becomes problematic.",
        },
        {
          q: "Is TOPGEAR Casino promoting gambling?",
          a: "No. TOPGEAR Casino is a free entertainment platform using virtual coins with no real money involved. We explicitly state this is for entertainment purposes only and provide resources for responsible gaming.",
        },
        {
          q: "What if I think I have a gaming problem?",
          a: "If you feel gaming is becoming problematic, please reach out for help. Contact Gamblers Anonymous (www.gamblersanonymous.org) or the National Council on Problem Gambling (1-800-GAMBLER). We also provide resources on our Responsible Gaming page.",
        },
        {
          q: "How can I play responsibly?",
          a: "Play responsibly by: (1) Setting time limits, (2) Taking regular breaks, (3) Viewing gaming as entertainment, not income, (4) Managing your coin budget, (5) Not playing when upset or stressed, (6) Maintaining balance with other activities.",
        },
        {
          q: "Are there tools to help me control my gaming?",
          a: "While TOPGEAR Casino doesn't require login, you can control your gaming by setting personal time limits, taking breaks, and using your browser's privacy settings. We also provide extensive responsible gaming information.",
        },
      ],
    },
    {
      category: "Technical Issues",
      questions: [
        {
          q: "What browsers does TOPGEAR Casino support?",
          a: "TOPGEAR Casino works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience.",
        },
        {
          q: "Why is the game loading slowly?",
          a: "Slow loading can be due to your internet connection, browser cache, or device performance. Try: (1) Refreshing the page, (2) Clearing your browser cache, (3) Checking your internet connection, (4) Using a different browser.",
        },
        {
          q: "My coins disappeared! What happened?",
          a: "Your coins are stored in your browser's local storage. If you cleared your browser cache or cookies, your coins may have been reset. To prevent this, avoid clearing browser data. If this happens, use the reset option to get 500 bonus coins.",
        },
        {
          q: "Can I play offline?",
          a: "No, TOPGEAR Casino requires an internet connection to play. The games are hosted on our servers and need to communicate with them for fair gameplay and result generation.",
        },
        {
          q: "What should I do if a game crashes?",
          a: "If a game crashes, simply refresh the page or navigate back to the games menu. Your coin balance is saved, and you can try again. If the problem persists, try a different browser or device.",
        },
      ],
    },
    {
      category: "Account & Settings",
      questions: [
        {
          q: "How do I reset my coins?",
          a: "When you run out of coins, you'll see a reset option. Click it to receive 500 bonus coins. You can use this option whenever you've used all your coins.",
        },
        {
          q: "Can I have multiple accounts?",
          a: "Since no registration is required, you can play from different devices or browsers, and each will have its own coin balance. However, we recommend playing from one device for consistency.",
        },
        {
          q: "How do I clear my gaming history?",
          a: "Your gaming data is stored locally on your device. To clear it, clear your browser's cache and cookies. Note that this will also reset your coin balance.",
        },
        {
          q: "Can I change my preferences?",
          a: "Currently, TOPGEAR Casino has limited customization options. We're working on adding more preference settings in future updates.",
        },
      ],
    },
    {
      category: "Support & Feedback",
      questions: [
        {
          q: "How do I contact support?",
          a: "You can contact our support team at support@topgear.com. We typically respond within 24 hours. You can also use the contact form on our website.",
        },
        {
          q: "How long does it take to get a response?",
          a: "Our support team aims to respond to all inquiries within 24 hours. During peak times, it may take slightly longer, but we prioritize all customer requests.",
        },
        {
          q: "Can I provide feedback or suggestions?",
          a: "Absolutely! We love hearing from our players. Send your feedback, suggestions, or bug reports to support@topgear.com. Your input helps us improve the platform.",
        },
        {
          q: "Is there a community or forum?",
          a: "Currently, we don't have a dedicated forum, but we encourage players to share their experiences and feedback with us directly. We're considering adding community features in the future.",
        },
        {
          q: "How often are new games added?",
          a: "We regularly add new games and features based on player feedback and market trends. Check back frequently for updates and new additions to our game portfolio.",
        },
      ],
    },
    {
      category: "Legal & Compliance",
      questions: [
        {
          q: "Is TOPGEAR Casino legal?",
          a: "TOPGEAR Casino is a free-to-play entertainment platform with no real money involved. It complies with applicable laws and regulations. Since no real gambling occurs, it operates differently from traditional gambling platforms.",
        },
        {
          q: "What are your terms and conditions?",
          a: "Our complete Terms and Conditions are available on our website. They outline the rules for using TOPGEAR Casino, including game rules, coin usage, and user conduct expectations.",
        },
        {
          q: "What is your privacy policy?",
          a: "Our Privacy Policy explains how we collect, use, and protect your information. Since registration isn't required, we collect minimal data. Read our full policy on the website for details.",
        },
        {
          q: "Do you have a disclaimer?",
          a: "Yes, we have a comprehensive disclaimer stating that TOPGEAR Casino is for entertainment purposes only, no real money is involved, and virtual coins have no real-world value.",
        },
        {
          q: "Is TOPGEAR Casino regulated?",
          a: "TOPGEAR Casino is a free entertainment platform, not a gambling operation. While we don't require gambling licenses, we maintain high standards for fairness, security, and responsible gaming.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 bg-card/30 border-b border-border">
        <div className="container px-3 sm:px-4 lg:px-6">
          <h1 className="text-2xl sm:text-xl sm:text-lg sm:text-xl md:text-2xl lg:text-3xl lg:text-4xl lg:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Find comprehensive answers to all your questions about TOPGEAR Casino. If you cannot find what you're looking for, contact our support team.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-8 sm:py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 lg:py-24">
        <div className="container max-w-4xl">
          {faqCategories.map((category, categoryIdx) => (
            <div key={categoryIdx} className="mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.questions.map((faq, qIdx) => {
                  const globalIndex = faqCategories
                    .slice(0, categoryIdx)
                    .reduce((sum, cat) => sum + cat.questions.length, 0) + qIdx;

                  return (
                    <div
                      key={globalIndex}
                      className="bg-card border border-border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                        className="w-full flex items-center justify-between p-3 sm:p-2 sm:p-3 md:p-4 md:p-6 hover:bg-card/50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-foreground text-left">{faq.q}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                            openIndex === globalIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openIndex === globalIndex && (
                        <div className="px-6 pb-6 border-t border-border">
                          <p className="text-muted-foreground">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-8 sm:py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 lg:py-24 bg-card/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            Cannot find the answer you are looking for? Our support team is here to help. Reach out to us anytime.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
