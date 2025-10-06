import React from "react";

export default function Asterisk() {
  return (
    <article className="prose lg:prose-base max-w-full mx-auto">
      <h1>
        Guide to Integrating Asterisk with Microsoft Teams using Direct Routing
      </h1>

      <p className="lead">
        Learn how to seamlessly connect your on-premises Asterisk PBX system
        with Microsoft Teams through Direct Routing, enabling enterprise-grade
        calling while maintaining control over your telephony infrastructure.
      </p>

      <h2>Understanding Direct Routing</h2>

      <p>
        Microsoft Teams Direct Routing allows organizations to use their
        existing telephony infrastructure while leveraging Teams as their
        primary communication platform. This hybrid approach provides the best
        of both worlds—cloud collaboration with on-premises call control.
      </p>

      <h3>Prerequisites</h3>

      <ul>
        <li>
          <strong>Asterisk Version:</strong> 16.0 or higher with PJSIP support
        </li>
        <li>
          <strong>Microsoft 365:</strong> E3/E5 license with Phone System add-on
        </li>
        <li>
          <strong>SBC Certificate:</strong> Trusted CA certificate for TLS
          connections
        </li>
        <li>
          <strong>Public IP:</strong> Static IP address with proper firewall
          configuration
        </li>
        <li>
          <strong>SIP Trunk:</strong> Existing SIP provider or direct PSTN
          connection
        </li>
      </ul>

      <h2>Configuration Steps</h2>

      <p>
        The integration process involves configuring Asterisk as a Session
        Border Controller (SBC), setting up the appropriate routing rules, and
        registering the SBC with Microsoft&lsquo;s Phone System.
      </p>

      <h3>Asterisk Configuration</h3>

      <p>
        Configure PJSIP endpoints for Microsoft Teams connectivity, ensuring
        proper codec negotiation and security settings. The configuration must
        handle both inbound and outbound call routing while maintaining call
        quality through proper QoS settings.
      </p>

      <blockquote>
        <p>
          &ldquo;Direct Routing gave us the flexibility to maintain our existing
          phone numbers and call routing logic while modernizing our
          collaboration platform.&ldquo;
        </p>
        <footer>— Marcus Thompson, IT Director</footer>
      </blockquote>

      <h3>Testing and Troubleshooting</h3>

      <p>
        Proper testing involves verifying call flow in both directions, ensuring
        caller ID accuracy, and validating emergency services routing. Common
        issues include certificate problems, firewall misconfigurations, and
        codec mismatches.
      </p>
    </article>
  );
}
