import "./Header.css";

export function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>About</li>
          <li>
            <a
              href="https://www.buymeacoffee.com/euripidean"
              target="_blank"
              rel="noreferrer"
            >
              Buy Me a Coffee
            </a>
          </li>
        </ul>
      </nav>
      <header>
        <h1>Stranger Than Ipsum</h1>
        <h2>A Nick Cave Ipsum Generator</h2>
        <p>
          Here is some pretty great copy about how awesome this Nick Cave Ipsum
          generator is.
        </p>
      </header>
    </>
  );
}
