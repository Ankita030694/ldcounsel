'use client'
import React from 'react';
import Link from 'next/link';

const AboutUsSection: React.FC = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        {/* Decorative Background Elements */}
        <div className="bg-decoration">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
        </div>

        <div className="about-content">
          {/* Header */}
          <div className="about-header">
            <div className="section-tag">About</div>
            <h2 className="section-title">The Visionary Build</h2>
            <p className="section-subtitle">
              Combining legal expertise with strategic vision to deliver exceptional results
            </p>
          </div>

          {/* Content Grid */}
          <div className="content-wrapper">
            {/* Left Column - Main Content */}
            <div className="main-content">
              {/* Introduction Card */}
              <div className="content-card intro-card">
                <div className="card-header">
                  <h3>Our Foundation</h3>
                </div>
                <p>
                  At LD Counsels, we provide litigation, legal consultancy, contract drafting, and
                  compliance solutions designed to meet today's dynamic legal landscape. We combine
                  courtroom expertise with strategic advisory skills, ensuring every client receives
                  the clarity, confidence, and results they need to move forward.

                  Your challenges become our mission. Your goals, our strategy and your trust, our greatest victory.

                </p>
              </div>

             
              {/* Mission & Approach */}
              <div className="content-row">
                <div className="content-card">
                  <div className="card-header">
                    <h3>Our Mission</h3>
                  </div>
                  <p>
                    Our mission is simple - to combine legal expertise with personalised attention, ensuring
                    every client feels informed, empowered, and supported at every step. We believe that
                    the law is not just about resolving disputes, but about building strategies that protect
                    and advance our clients' interests.
                  </p>
                </div>

                <div className="content-card">
                  <div className="card-header">
                    <h3>Our Approach</h3>
                  </div>
                  <p>
                    We combine deep legal expertise with a solutions-focused approach, delivering
                    strategies tailored to each client's unique needs. Our guiding principles are
                    precision, professionalism, and unwavering dedication.
                  </p>
                </div>
              </div>

              {/* Services & Network */}
              <div className="content-row">
                <div className="content-card">
                  <div className="card-header">
                    <h3>What We Do</h3>
                  </div>
                  <p>
                    We deliver strategic, result-driven legal solutions across litigation, arbitration, and advisory.
                    Our work spans Trial Courts, Delhi High Court, Supreme Court of India, and specialized forums.
                    We advise on civil, criminal, commercial, matrimonial, consumer, and media law matters.
                  </p>
                </div>

                <div className="content-card">
                  <div className="card-header">
                    <h3>Our Network</h3>
                  </div>
                  <p>
                    Backed by a nationwide network of 150+ lawyers, we ensure seamless representation
                    and tailored legal strategies. From startups to established businesses, we combine
                    precision and professionalism to achieve results that matter.
                  </p>
                </div>
              </div>

              {/* Proven Track Record & Client-Centric Approach */}
              <div className="content-row">
                <div className="content-card">
                  <div className="card-header">
                    <h3>Proven Track Record</h3>
                  </div>
                  <p>
                    Successful representation in complex, high-stakes matters.
                  </p>
                </div>

                <div className="content-card">
                  <div className="card-header">
                    <h3>Client-Centric Approach</h3>
                  </div>
                  <p>
                    Personalised attention and strategies aligned with your objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Highlights */}
            <div className="sidebar">
              <div className="stats-card">
                <h3>Our Impact</h3>
                <div className="stat-item">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Expert Lawyers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Cases Handled</div>
                </div>
              </div>

              <div className="expertise-card">
                <h3>Expertise Areas</h3>
                <div className="expertise-list">
                  <div className="expertise-item">Civil Law</div>
                  <div className="expertise-item">Criminal Law</div>
                  <div className="expertise-item">Commercial Law</div>
                  <div className="expertise-item">Matrimonial Law</div>
                  <div className="expertise-item">Consumer Law</div>
                  <div className="expertise-item">Media Law</div>
                  <div className="expertise-item">Corporate Governance</div>
                  <div className="expertise-item">Compliance</div>
                </div>
              </div>

              <div className="cta-card">
                <h3>Ready to Get Started?</h3>
                <p>Let's discuss your legal needs and find the best solution for you.</p>
                <Link href="/contact">  
                <button className="cta-button">Schedule Consultation</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bottom-section">
            <div className="closing-card">
              <h3>Our Commitment</h3>
              <p>
                Beyond litigation, LD Counsels has been a trusted advisor to startups during their
                formative stages, ensuring they are built on strong legal foundations. Every matter
                we take on is approached with strategic foresight, unwavering commitment, and a focus
                on results that truly matter.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-us-section {
          background: #102028;
          color: #F8F1E6;
          padding: 60px 0;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .bg-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .circle-1, .circle-2, .circle-3 {
          position: absolute;
          border-radius: 50%;
          background: rgba(248, 241, 230, 0.02);
          border: 1px solid rgba(248, 241, 230, 0.05);
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          right: -150px;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          bottom: 20%;
          left: -100px;
        }

        .circle-3 {
          width: 150px;
          height: 150px;
          top: 50%;
          right: 10%;
          opacity: 0.3;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 16px;
          position: relative;
          z-index: 2;
        }

        .about-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-tag {
          display: inline-block;
          background: rgba(248, 241, 230, 0.1);
          color: #F8F1E6;
          padding: 6px 16px;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
          border: 1px solid rgba(248, 241, 230, 0.2);
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: #F8F1E6;
          font-style: italic;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1rem;
          color: #F8F1E6;
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .main-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .content-card {
          background: #F8F1E6;
          border: 1px solid rgba(16, 32, 40, 0.1);
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .content-card:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transform: translateY(-5px);
        }

        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }

        .card-icon {
          font-size: 2rem;
          margin-right: 16px;
          opacity: 0.8;
        }

        .card-header h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #102028;
          margin: 0;
        }

        .content-card p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #102028;
          opacity: 0.9;
          margin: 0;
        }

        .intro-card {
          border: 2px solid rgba(16, 32, 40, 0.15);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }

        .mission-highlight {
          background: #F8F1E6;
          border: 2px solid rgba(16, 32, 40, 0.1);
          border-radius: 20px;
          padding: 24px;
          text-align: center;
          position: relative;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }

        .quote-mark {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          color: rgba(16, 32, 40, 0.2);
          position: absolute;
          top: 10px;
          left: 20px;
        }

        .quote-mark.closing {
          bottom: 10px;
          right: 20px;
          top: auto;
          left: auto;
        }

        .mission-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-style: italic;
          color: #102028;
          margin: 0;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        .content-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .stats-card, .expertise-card, .cta-card {
          background: #F8F1E6;
          border: 1px solid rgba(16, 32, 40, 0.1);
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .stats-card h3, .expertise-card h3, .cta-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #102028;
          margin-bottom: 16px;
          text-align: center;
        }

        .cta-card p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #102028;
          opacity: 0.8;
          margin-bottom: 16px;
          text-align: center;
        }

        .stat-item {
          text-align: center;
          margin-bottom: 16px;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #102028;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #102028;
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .expertise-list {
          display: grid;
          gap: 8px;
        }

        .expertise-item {
          background: rgba(16, 32, 40, 0.05);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.85rem;
          color: #102028;
          opacity: 0.9;
          border-left: 3px solid rgba(16, 32, 40, 0.3);
          transition: all 0.3s ease;
        }

        .expertise-item:hover {
          background: rgba(16, 32, 40, 0.1);
          border-left-color: #102028;
          opacity: 1;
        }

        .expertise-cta {
          margin-top: 16px;
          text-align: center;
        }

        .cta-button {
          background: #102028;
          color: #F8F1E6;
          border: 2px solid #102028;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          width: 100%;
        }

        .cta-button:hover {
          background: #F8F1E6;
          color: #102028;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(16, 32, 40, 0.2);
        }

        .cta-button:active {
          transform: translateY(0);
        }

        .bottom-section {
          margin-top: 40px;
        }

        .closing-card {
          background: #F8F1E6;
          border: 1px solid rgba(16, 32, 40, 0.1);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .closing-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #102028;
          margin-bottom: 16px;
        }

        .closing-card p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #102028;
          opacity: 0.9;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Responsive Design */
        @media (min-width: 640px) {
          .about-us-section {
            padding: 80px 0;
          }

          .container {
            padding: 0 24px;
          }

          .about-header {
            margin-bottom: 60px;
          }

          .section-title {
            font-size: 3rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
          }

          .content-wrapper {
            gap: 50px;
            margin-bottom: 50px;
          }

          .main-content {
            gap: 30px;
          }

          .content-card {
            padding: 24px;
          }

          .card-header h3 {
            font-size: 1.4rem;
          }

          .content-card p {
            font-size: 1rem;
          }

          .content-row {
            gap: 24px;
          }

          .sidebar {
            gap: 24px;
          }

          .stats-card, .expertise-card, .cta-card {
            padding: 24px;
          }

          .stats-card h3, .expertise-card h3, .cta-card h3 {
            font-size: 1.4rem;
            margin-bottom: 20px;
          }

          .cta-card p {
            font-size: 0.95rem;
            margin-bottom: 20px;
          }

          .stat-item {
            margin-bottom: 20px;
          }

          .stat-number {
            font-size: 2.25rem;
            margin-bottom: 8px;
          }

          .stat-label {
            font-size: 0.85rem;
          }

          .expertise-item {
            padding: 10px 14px;
            font-size: 0.9rem;
          }

          .cta-button {
            padding: 12px 24px;
            font-size: 0.9rem;
          }

          .bottom-section {
            margin-top: 50px;
          }

          .closing-card {
            padding: 30px;
          }

          .closing-card h3 {
            font-size: 1.6rem;
            margin-bottom: 20px;
          }

          .closing-card p {
            font-size: 1rem;
          }
        }

        @media (min-width: 768px) {
          .about-us-section {
            padding: 100px 0;
          }

          .container {
            padding: 0 30px;
          }

          .about-header {
            margin-bottom: 80px;
          }

          .section-title {
            font-size: 3.5rem;
          }

          .section-subtitle {
            font-size: 1.2rem;
          }

          .content-wrapper {
            gap: 60px;
            margin-bottom: 60px;
          }

          .main-content {
            gap: 40px;
          }

          .content-card {
            padding: 28px;
          }

          .card-header h3 {
            font-size: 1.5rem;
          }

          .content-card p {
            font-size: 1.05rem;
          }

          .content-row {
            gap: 30px;
          }

          .sidebar {
            gap: 30px;
          }

          .stats-card, .expertise-card, .cta-card {
            padding: 28px;
          }

          .stats-card h3, .expertise-card h3, .cta-card h3 {
            font-size: 1.5rem;
            margin-bottom: 24px;
          }

          .cta-card p {
            font-size: 1rem;
            margin-bottom: 24px;
          }

          .stat-item {
            margin-bottom: 24px;
          }

          .stat-number {
            font-size: 2.5rem;
            margin-bottom: 8px;
          }

          .stat-label {
            font-size: 0.9rem;
          }

          .expertise-item {
            padding: 12px 16px;
            font-size: 0.95rem;
          }

          .cta-button {
            padding: 12px 24px;
            font-size: 0.95rem;
          }

          .bottom-section {
            margin-top: 60px;
          }

          .closing-card {
            padding: 36px;
          }

          .closing-card h3 {
            font-size: 1.75rem;
            margin-bottom: 20px;
          }

          .closing-card p {
            font-size: 1.1rem;
          }
        }

        @media (min-width: 1024px) {
          .about-us-section {
            padding: 120px 0;
          }

          .container {
            padding: 0 30px;
          }

          .about-header {
            margin-bottom: 80px;
          }

          .section-title {
            font-size: 4rem;
          }

          .section-subtitle {
            font-size: 1.25rem;
          }

          .content-wrapper {
            grid-template-columns: 2fr 1fr;
            gap: 60px;
            margin-bottom: 60px;
          }

          .main-content {
            gap: 40px;
          }

          .content-card {
            padding: 32px;
          }

          .card-header h3 {
            font-size: 1.5rem;
          }

          .content-card p {
            font-size: 1.1rem;
          }

          .content-row {
            gap: 30px;
          }

          .sidebar {
            gap: 30px;
          }

          .stats-card, .expertise-card, .cta-card {
            padding: 32px;
          }

          .stats-card h3, .expertise-card h3, .cta-card h3 {
            font-size: 1.5rem;
            margin-bottom: 24px;
          }

          .cta-card p {
            font-size: 1rem;
            margin-bottom: 24px;
          }

          .stat-item {
            margin-bottom: 24px;
          }

          .stat-number {
            font-size: 2.5rem;
            margin-bottom: 8px;
          }

          .stat-label {
            font-size: 0.9rem;
          }

          .expertise-item {
            padding: 12px 16px;
            font-size: 0.95rem;
          }

          .cta-button {
            padding: 12px 24px;
            font-size: 0.95rem;
          }

          .bottom-section {
            margin-top: 60px;
          }

          .closing-card {
            padding: 40px;
          }

          .closing-card h3 {
            font-size: 1.75rem;
            margin-bottom: 20px;
          }

          .closing-card p {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .sidebar {
            order: -1;
          }

          .stats-card, .expertise-card {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .content-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .mission-highlight {
            padding: 20px 16px;
          }

          .quote-mark {
            font-size: 2.5rem;
          }

          .mission-text {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }

          .about-header {
            margin-bottom: 40px;
          }

          .content-card {
            padding: 16px;
          }

          .card-header {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }

          .card-icon {
            margin-right: 0;
          }

          .card-header h3 {
            font-size: 1.1rem;
          }

          .content-card p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;
