import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TodoList from "@/components/TodoList";
import { CheckCircle2, Zap, Share2 } from "lucide-react";

export default function Todo() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-card/30 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Gaming Tasks</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Track your gaming goals and achievements. Stay organized and motivated!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Todo Component */}
            <div className="lg:col-span-2">
              <TodoList
                storageKey="topgear-gaming-tasks"
                title="My Gaming Tasks"
                placeholder="Add a gaming goal or task..."
                maxItems={50}
              />
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* Tips Card */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Quick Tips
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong>Set Goals:</strong> Add specific gaming goals like "Play Blackjack 5 times" or "Earn 500 coins"
                  </p>
                  <p>
                    <strong>Track Progress:</strong> Check off tasks as you complete them to stay motivated
                  </p>
                  <p>
                    <strong>Organize:</strong> Keep your tasks organized and prioritized
                  </p>
                  <p>
                    <strong>Persistent:</strong> Your tasks are saved automatically and persist across sessions
                  </p>
                </div>
              </div>

              {/* Features Card */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Features
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Add and manage tasks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Mark tasks as complete
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Delete tasks you don't need
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Progress tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Auto-save to browser storage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Up to 50 tasks maximum
                  </li>
                </ul>
              </div>

              {/* Example Tasks Card */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-primary" />
                  Example Tasks
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Win 3 games of Blackjack</li>
                  <li>• Spin the wheel 10 times</li>
                  <li>• Try all 5 games</li>
                  <li>• Earn 1000 coins</li>
                  <li>• Play for 30 minutes</li>
                  <li>• Complete daily bonus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How to Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Add Task",
                description: "Type your gaming goal or task in the input field and click Add",
              },
              {
                step: "2",
                title: "Track Progress",
                description: "Watch the progress bar fill as you complete tasks",
              },
              {
                step: "3",
                title: "Mark Complete",
                description: "Click the checkbox to mark tasks as done",
              },
              {
                step: "4",
                title: "Stay Organized",
                description: "Delete tasks you no longer need and keep focused",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Use a Todo List?</h2>
          <div className="space-y-6 text-muted-foreground">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Stay Motivated</h3>
              <p>
                Setting and tracking gaming goals keeps you engaged and motivated. Seeing your progress grow is rewarding and fun!
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Organize Your Gaming</h3>
              <p>
                Keep track of which games you want to try, goals you want to achieve, and milestones you want to reach. Stay organized and focused.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Measure Achievement</h3>
              <p>
                Celebrate your accomplishments by checking off completed tasks. The progress bar shows how far you've come and keeps you on track.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Persistent Storage</h3>
              <p>
                Your tasks are automatically saved to your browser. They'll be there when you come back, so you never lose track of your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
