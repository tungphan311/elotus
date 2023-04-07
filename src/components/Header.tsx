import { motion } from "framer-motion";

function Header() {
  return (
    <header>
      <motion.div initial={{ y: -200 }} animate={{ y: 0 }}>
        <h1 className="App-logo"></h1>
      </motion.div>
    </header>
  );
}

export default Header;
