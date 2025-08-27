import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Newletter Signup</h1>
    <h2>Join the Style Circle</h2>
    <p>Get exclusive drops, early sales, and fashion inspiration straight to your inbox.</p>
    <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Join Now</button>
    </form>
</div>

  );
};

export default Newsletter;
