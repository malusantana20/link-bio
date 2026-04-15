@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Work+Sans:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Surface hierarchy */
    --background: 38 33% 97%;
    --foreground: 50 10% 10%;
    --surface: 38 33% 97%;
    --surface-container-lowest: 0 0% 100%;
    --surface-container-low: 35 20% 95%;
    --surface-container: 34 15% 93%;
    --surface-container-high: 33 10% 90%;
    --surface-container-highest: 28 12% 88%;
    --on-surface: 50 10% 10%;
    --on-surface-variant: 13 11% 28%;

    /* Primary */
    --primary: 15 80% 2%;
    --primary-foreground: 0 0% 100%;
    --primary-container: 16 35% 13%;
    --primary-fixed: 20 100% 90%;
    --primary-fixed-dim: 20 35% 80%;

    /* Secondary */
    --secondary: 0 19% 40%;
    --secondary-foreground: 0 0% 100%;
    --secondary-container: 0 100% 90%;
    --on-secondary-container: 0 17% 41%;

    /* Outline */
    --outline: 12 8% 47%;
    --outline-variant: 18 12% 78%;

    /* Mapped to shadcn tokens */
    --card: 0 0% 100%;
    --card-foreground: 50 10% 10%;
    --popover: 0 0% 100%;
    --popover-foreground: 50 10% 10%;
    --muted: 35 20% 95%;
    --muted-foreground: 13 11% 28%;
    --accent: 35 20% 95%;
    --accent-foreground: 13 11% 28%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 18 12% 78%;
    --input: 18 12% 78%;
    --ring: 12 8% 47%;
    --radius: 0rem;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'Work Sans', sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
  ::selection {
    background-color: hsl(0 100% 90%);
    color: hsl(0 17% 41%);
  }
}

@keyframes custom-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-bounce-subtle {
  animation: custom-bounce 2s infinite;
}
