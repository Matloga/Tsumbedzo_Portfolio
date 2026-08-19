export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="copyright text-center">
          <p>
            &copy; {new Date().getFullYear()} <strong>Tsumbedzo Matloga</strong>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
