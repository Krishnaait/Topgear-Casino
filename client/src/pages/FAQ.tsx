import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is TOPGEAR Casino free to play?",
      answer: "Yes, TOPGEAR Casino is 100% free to play. There are no hidden charges or real money transactions. You start with 1,000 virtual coins and can play all games without spending any real money.",
    },
    {
      question: "Do I need to create an account or sign up?",
      answer: "No, you do not need to sign up or create an account. Simply visit TOPGEAR Casino and start playing immediately. No registration required!",
    },
    {
      question: "Can I withdraw my coins or exchange them for real money?",
      answer: "No, virtual coins have no real-world value and cannot be withdrawn or exchanged for real money. They are purely for gameplay and entertainment purposes.",
    },
    {
      question: "What happens when I run out of coins?",
      answer: "You have two options: Claim your daily bonus of 200 coins from the Spin Wheel (available every 24 hours), or use the reset option to get 500 bonus coins to continue playing.",
    },
    {
      question: "How often can I claim the daily bonus?",
      answer: "You can claim the daily bonus once every 24 hours. Simply visit the Spin Wheel and click to spin for your free coins.",
    },
    {
      question: "Are the games fair?",
      answer: "Yes, all games use certified random number generators to ensure fair and unpredictable outcomes. Every player has an equal chance of winning. We do not manipulate results or use hidden algorithms.",
    },
    {
      question: "What is the minimum age to play?",
      answer: "TOPGEAR Casino is restricted to players aged 18 and above. We take age verification seriously.",
    },
    {
      question: "Can I play on mobile devices?",
      answer: "Yes, TOPGEAR Casino is fully responsive and works on all devices including smartphones, tablets, and desktop computers.",
    },
    {
      question: "How do I contact support?",
      answer: "You can contact our support team at support@topgear.com. We are here to help with any questions or issues you may have.",
    },
    {
      question: "Is my personal data safe?",
      answer: "Yes, we take data security seriously. Since you do not need to sign up, we collect minimal personal information. All data is protected with industry-standard security measures.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-card/30 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Find answers to common questions about TOPGEAR Casino.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-card/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-6 border-t border-border">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cannot find the answer you are looking for? Please contact our support team.
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
