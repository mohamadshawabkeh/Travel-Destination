import '../footer/Footer.css'

function Footer(){
    const author = "Mohammad Shawabkeh, ASAC Student.";
    const socialMediaLinks = [
        { platform: "Twitter", url: "https://twitter.com/example" },
        { platform: "Facebook", url: "https://facebook.com/example" },
        { platform: "LinkedIn", url: "https://linkedin.com/in/example" },
      ]; 
   return (
     <footer>
       <div>
        <p>Connect with us on:</p>
        <ul>
          {socialMediaLinks.map((link) => (
            <li key={link.platform}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Written by {author}</p>
      </div>


     </footer>

);

}
export default Footer;
