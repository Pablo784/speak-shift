import ThemeToggle from "@/components/ThemeToggle";
import TranslatorCard from "@/components/TranslatorCard";
import heroQuill from "@/assets/hero-quill.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { History, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 md:px-12">
        <h2 className="font-display text-lg font-bold text-foreground tracking-wide">
          SpeakShift
        </h2>
        <div className="flex items-center gap-3">
          <Link to="/history" className="flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            <History className="h-4 w-4" />
            History
          </Link>
          <Link to="/favorites" className="flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            <Star className="h-4 w-4" />
            Favorites
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-8 pb-4 md:pt-16 md:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center space-y-4 max-w-xl"
        >
          <div className="mx-auto w-28 h-28 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg bg-muted/50 flex items-center justify-center hover-scale cursor-pointer">
            <img src={heroQuill} alt="SpeakShift logo" width={112} height={112} className="w-full h-full object-cover" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Shift Your <span className="text-primary">Voice</span>
          </h1>
          <p className="font-serif text-lg text-muted-foreground italic">
            Flip the way you speak.
          </p>
        </motion.div>
      </section>

      {/* Translator */}
      <main className="px-6 py-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <TranslatorCard />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="font-body text-xs text-muted-foreground">
          Crafted with utmost care &bull; SpeakShift
        </p>
      </footer>
    </div>
  );
};

export default Index;
