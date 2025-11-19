import "@/styles/globals.css";
import ThemeProvider from "../../components/ThemeProvider";
import GlobalBackground from "../../components/GlobalBackground";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalBackground />
      <div className="relative z-10">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
