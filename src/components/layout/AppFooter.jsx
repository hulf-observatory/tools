import { SITE_URL } from '../../lib/links';

// Footer bar shared by the Observatory's pages (visual standard, 24 Oct 2026): the feedback line and the
// data licence, with Disclaimer at the right. The site links live in the header only.
export default function AppFooter() {
  return (
    <footer className="obs-footer">
      <div className="obs-footer-fine">
        <span>
          This website is under continuous development; you may find errors or incomplete content.
          Feedback: <a href="mailto:hulf.observatory@gmail.com">hulf.observatory@gmail.com</a>
          <span className="obs-footer-sep"> · </span>
          Processing and metadata CC BY 4.0; each layer keeps its source's licence.
        </span>
        <a className="obs-footer-disclaimer" href={SITE_URL + '/disclaimer'}>Disclaimer</a>
      </div>
    </footer>
  );
}
