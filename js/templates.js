function signUpFormTemplate() {
    return /* html */ `
    <form required id="form" onsubmit="initRegister(); return false;">
        <div class="form-div">

            <div class="form-style">
                <!-- Name input -->
                <input required type="text" id="user-name" class="form-control name" placeholder="Name" /> 
                <img src="../assets/img/person.svg" alt="">
            </div>
            <div class="form-style">
                <!-- Email input -->
                <input required type="email" id="email" class="form-control email" placeholder="Email" />
                <img id="test" src="../assets/img/mail.svg" alt="Email Bild">
            </div>
            <div class="email-fail" id="email-fail"></div> 

            <div class="form-style">
                <!-- Password input -->
                <input required oninput="changeImage()" type="password" id="password" class="form-control password" placeholder="Password"/>
                <img id="pw-img" onclick="toggleVisibility()" src="../assets/img/lock.svg" alt="Passwort Bild">
            </div>

            <div class="form-style">
                <!-- Confirm Password input -->
                <input required oninput="changeImage2()" type="password" id="confirm-password" class="form-control password" placeholder="Confirm Password"/>
                <img id="cpw-img" onclick="toggleVisibility2()" src="../assets/img/lock.svg" alt="Passwort Bild">
            </div>
            <div class="pw-fail" id="pw-fail"></div>
        </div>        
            <!-- 2 column grid layout for inline styling -->
        <div class="row mb-4 mg-40">
            <div class="col d-flex">
                <!-- Checkbox -->
                <div class="form-check">
                <input required class="form-check-input b-color" type="checkbox" value="" id="form2Example31" unchecked />
                <label class="form-check-label" for="form2Example31"> <span id="label-text">I accept the <a href="privacy.html">Privacy Policy</a></span></label>
                </div>
            </div>
        </div>
        <div class="login-button-div">
            <!-- Submit button -->
            <button id="signup-button" type="submit" class="btn btn-primary btn-block mb-4">Sign Up</button>
        </div>
    </form>`;
}


function logInFormTemplate() {
    return /* html */ `
    <form required id="form" onsubmit="login(); return false;">
        <div class="form-div">

            <div class="form-style">
                <!-- Email input -->
                <input required type="email" id="email" class="form-control email" placeholder="Email" />
                <img id="test" src="../assets/img/mail.svg" alt="Email Bild">
            </div>
            <div class="email-fail" id="email-fail"></div> 

            <div class="form-style">
                <!-- Password input -->
                <input required oninput="changeImage()" type="password" id="password" class="form-control password" placeholder="Password"/>
                <img onclick="toggleVisibility()" id="pw-img" src="../assets/img/lock.svg" alt="">
            </div>
            <div class="login-fail" id="login-fail"></div>
        </div>        
            <!-- 2 column grid layout for inline styling -->
        <div class="row mb-4 mg-40">
            <div class="col d-flex">
                <!-- Checkbox -->
                <div class="form-check">
                    <input class="form-check-input b-color" type="checkbox" value="" id="form2Example31" checked />
                    <label class="form-check-label" for="form2Example31"> <span id="label-text"> Remember me </span></label>
                </div>
            </div>
        </div>
        <div class="login-button-div">
            <!-- Submit button -->
            <button id="login-button" type="submit" class="btn btn-primary btn-block mb-4 mobile-width" onclick="login()">Log in</button>
            <button onclick="guestLogin()" id="guest-button" type="button" class="btn btn-outline-secondary btn-block mb-4 btn2">Guest log in</button>
        </div>
    </form>`;
}

{/* <h1>Privacy Policy</h1>
        <h2>1. Data Protection at a Glance</h2>
        <h3>General Information</h3>
        <p>
          The following information provides a simple overview of what happens
          with your personal data when you visit this website. Personal data
          includes all data that can personally identify you. Detailed
          information on data protection can be found in our privacy policy
          listed below this text.
        </p>
        <h3>Data Collection on this Website</h3>
        <h4>Who is responsible for data collection on this website?</h4>
        <p>
          Data processing on this website is carried out by the website
          operator. The contact details of the data controller can be found in
          the "Note on the Responsible Party" section in this privacy policy.
        </p>
        <h4>How do we collect your data?</h4>
        <p>
          Your data is collected, in part, by you providing it to us. This may
          include data entered into a contact form, for example.
        </p>
        <p>
          Other data is automatically collected or after your consent when
          visiting the website through our IT systems. This includes primarily
          technical data (e.g., internet browser, operating system, or time of
          page access). This data is collected automatically when you enter this
          website.
        </p>
        <h4>What do we use your data for?</h4>
        <p>
          Some data is collected to ensure the proper functioning of the
          website. Other data may be used to analyze your user behavior.
        </p>
        <h4>What rights do you have regarding your data?</h4>
        <p>
          You have the right to obtain free information about the origin,
          recipient, and purpose of your stored personal data at any time. You
          also have the right to request the correction or deletion of this
          data. If you have given consent for data processing, you can revoke it
          at any time for the future. Additionally, under certain circumstances,
          you have the right to request the restriction of the processing of
          your personal data. Furthermore, you have the right to lodge a
          complaint with the relevant supervisory authority.
        </p>
        <p>
          For this and for further questions regarding data protection, you can
          contact us at any time.
        </p>
        <h2>2. General Information and Mandatory Information</h2>
        <h3>Data Protection</h3>
        <p>
          The operators of these pages take the protection of your personal data
          very seriously. We treat your personal data confidentially and in
          accordance with legal data protection regulations and this privacy
          policy.
        </p>
        <p>
          When you use this website, various personal data is collected.
          Personal data is data that can personally identify you. This privacy
          policy explains what data we collect and for what purpose we use it.
          It also explains how and for what purpose this happens.
        </p>
        <p>
          We would like to point out that data transmission over the internet
          (e.g., communication by e-mail) may have security vulnerabilities.
          Complete protection of data against access by third parties is not
          possible.
        </p>
        <h3>Note on the Responsible Party</h3>
        <p>The responsible party for data processing on this website is:</p>
        <p>
          Seçkin Coskun<br />
          Auwiesenstrasse 68<br />
          8050 Zurich
        </p>
        <p>
          Phone: 076 304 95 24<br />
          Email: seckin.coskun.it@hotmail.com
        </p>
        <p>
          The responsible party is the natural or legal person who, alone or
          jointly with others, decides on the purposes and means of processing
          personal data (e.g., names, email addresses, etc.).
        </p>
        <h3>Storage Period</h3>
        <p>
          Unless a specific storage period is specified within this privacy
          policy, your personal data will remain with us until the purpose for
          data processing ceases. If you assert a legitimate request for
          deletion or revoke your consent to data processing, your data will be
          deleted, unless we have other legally permissible reasons for storing
          your personal data (e.g., tax or commercial retention periods); in the
          latter case, deletion will take place after these reasons no longer
          apply.
        </p>
        <h3>
          General Notes on the Legal Bases for Data Processing on this Website
        </h3>
        <p>
          If you have given your consent to data processing, we will process
          your personal data based on Art. 6 Para. 1 lit. a GDPR or Art. 9 Para.
          2 lit. a GDPR if special categories of data are processed. In the case
          of an express consent to the transfer of personal data to third
          countries, the processing is carried out based on Art. 49 Para. 1 lit.
          a GDPR. If you have consented to the storage of cookies or access to
          information on your device (e.g., via device fingerprinting), the
          processing will also take place based on § 25 Para. 1 TTDSG. Consent
          can be revoked at any time. If your data is processed to fulfill a
          contract or to carry out pre-contractual measures, the processing is
          based on Art. 6 Para. 1 lit. b GDPR. Furthermore, we process your data
          if this is necessary to fulfill a legal obligation based on Art. 6
          Para. 1 lit. c GDPR. The data processing can also be carried out based
          on our legitimate interest according to Art. 6 Para. 1 lit. f GDPR.
          Information on the respective legal bases in individual cases is
          provided in the following sections of this privacy policy.
        </p>
        <h3>Recipients of Personal Data</h3>
        <p>
          In the course of our business activities, we collaborate with various
          external entities. In some cases, the transmission of personal data to
          these external entities is necessary. We only disclose personal data
          to external entities if it is necessary for the fulfillment of a
          contract, if we are legally obliged to do so (e.g., disclosure of data
          to tax authorities), if we have a legitimate interest according to
          Art. 6 Para. 1 lit. f GDPR in the disclosure, or if another legal
          basis allows the data transfer. When using processors, we only
          disclose personal data of our customers based on a valid contract for
          order processing. In the case of joint processing, a contract for
          joint processing is concluded.
        </p>
        <h3>Revocation of Your Consent to Data Processing</h3>
        <p>
          Many data processing operations are only possible with your express
          consent. You can revoke consent already given at any time. The
          legality of the data processing carried out before the revocation
          remains unaffected by the revocation.
        </p>
        <h3>
          Right to Object to Data Collection in Special Cases and Direct
          Marketing (Art. 21 GDPR)
        </h3>
        <p>
          IF DATA PROCESSING IS BASED ON ART. 6 PARA. 1 LIT. E OR F GDPR, YOU
          HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT
          ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO
          APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL
          BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS DATA
          PROTECTION DECLARATION. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR
          AFFECTED PERSONAL DATA, UNLESS WE CAN PROVE COMPELLING LEGITIMATE
          GROUNDS FOR THE PROCESSING THAT OUTWEIGH YOUR INTERESTS, RIGHTS, AND
          FREEDOMS, OR THE PROCESSING SERVES TO ASSERT, EXERCISE, OR DEFEND
          LEGAL CLAIMS (OBJECTION ACCORDING TO ART. 21 PARA. 1 GDPR).
        </p>
        <p>
          IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU
          HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL
          DATA CONCERNING YOU FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO
          APPLIES TO PROFILING, INSOFAR AS IT IS RELATED TO SUCH DIRECT
          MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO
          LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION ACCORDING TO
          ART. 21 PARA. 2 GDPR).
        </p>
        <h3>Right to File Complaints with Regulatory Authorities</h3>
        <p>
          In the event of breaches of data protection law, the data subject has
          the right to lodge a complaint with the competent supervisory
          authority. The competent supervisory authority for data protection
          issues is the data protection officer of the federal state in which
          our company is based. A list of data protection officers and their
          contact details can be found at the following link:
          <a
            href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
            target="_blank"
            >https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a
          >.
        </p>
        <h3>Right to Data Portability</h3>
        <p>
          You have the right to have data that we process automatically on the
          basis of your consent or in fulfillment of a contract handed over to
          you or to a third party in a common, machine-readable format. If you
          request the direct transfer of the data to another responsible party,
          this will only be done if it is technically feasible.
        </p>
        <h3>SSL or TLS Encryption</h3>
        <p>
          This site uses SSL or TLS encryption for security reasons and for the
          protection of the transmission of confidential content, such as the
          inquiries you send to us as the site operator. You can recognize an
          encrypted connection in your browser's address line when it changes
          from "http://" to "https://" and the lock icon is displayed in your
          browser's address bar. If SSL or TLS encryption is activated, the data
          you transmit to us cannot be read by third parties.
        </p>
        <h3>Encrypted Payments on this Website</h3>
        <p>
          If there is an obligation to provide us with your payment data (e.g.,
          account number for direct debit authorization) after the conclusion of
          a fee-based contract, this data is required for payment processing.
        </p>
        <p>
          Payment transactions using common means of payment (Visa/MasterCard,
          direct debit) are made exclusively via an encrypted SSL or TLS
          connection. You can recognize an encrypted connection in your
          browser's address line when it changes from "http://" to "https://"
          and the lock icon is displayed in your browser's address bar. With
          encrypted communication, your payment data that you transmit to us
          cannot be read by third parties.
        </p>
        <h3>Information, Deletion, and Correction</h3>
        <p>
          Within the framework of the applicable legal provisions, you have the
          right to obtain information free of charge at any time about your
          stored personal data, its origin and recipients, and the purpose of
          data processing, and, if applicable, the right to correct or delete
          this data. For this purpose, as well as for further questions
          regarding personal data, you can contact us at any time at the address
          provided in the imprint.
        </p>
        <h3>Right to Restriction of Processing</h3>
        <p>
          You have the right to request the restriction of the processing of
          your personal data. You can contact us at any time at the address
          provided in the imprint. The right to restriction of processing exists
          in the following cases:
        </p>
        <ul>
          <li>
            If you dispute the accuracy of your personal data stored with us, we
            usually need time to verify this. For the duration of the audit, you
            have the right to request the restriction of the processing of your
            personal data.
          </li>
          <li>
            If the processing of your personal data happened/is happening
            unlawfully, you can request the restriction of data processing
            instead of deletion.
          </li>
          <li>
            If we no longer need your personal data, but you need it for the
            exercise, defense, or assertion of legal claims, you have the right
            to request the restriction of the processing of your personal data
            instead of deletion.
          </li>
          <li>
            If you have lodged an objection according to Art. 21 Para. 1 GDPR, a
            balance must be made between your interests and ours. As long as it
            is not clear whose interests prevail, you have the right to request
            the restriction of the processing of your personal data.
          </li>
        </ul>
        <p>
          If you have restricted the processing of your personal data, this data
          - apart from its storage - may only be processed with your consent or
          for the purpose of asserting, exercising, or defending legal claims or
          protecting the rights of another natural or legal person or for
          reasons of important public interest of the European Union or a Member
          State.
        </p>
        <h2>3. Data Collection on this Website</h2>
        <h3>Cookies</h3>
        <p>
          Our websites and pages use what the industry refers to as "cookies."
          Cookies are small text files that do not cause any damage to your
          device. They are either stored temporarily for the duration of a
          session (session cookies) or they are permanently archived on your
          device (permanent cookies). Session cookies are automatically deleted
          once you terminate your visit. Permanent cookies remain archived on
          your device until you actively delete them or they are automatically
          eradicated by your web browser.
        </p>
        <p>
          In some cases, it is possible that third-party cookies are stored on
          your device once you enter our site (third-party cookies). These
          cookies enable you or us to take advantage of certain services offered
          by the third party (e.g., cookies for the processing of payment
          services).
        </p>
        <p>
          Cookies have a variety of functions. Many cookies are technically
          essential since certain website functions would not work in the
          absence of the cookies (e.g., the shopping cart function or the
          display of videos). The purpose of other cookies may be the analysis
          of user patterns or the display of promotional messages.
        </p>
        <p>
          Cookies, which are required for the performance of electronic
          communication transactions (required cookies) or for the provision of
          certain functions you want to use (functional cookies, e.g., for the
          shopping cart function) or those that are necessary for the
          optimization of the website (e.g., cookies that provide measurable
          insights into the web audience), shall be stored on the basis of Art.
          6 Sect. 1 lit. f GDPR, unless a different legal basis is cited. The
          operator of the website has a legitimate interest in the storage of
          cookies to ensure the technically error-free and optimized provision
          of the operator's services. If your consent to the storage of the
          cookies has been requested, the respective cookies are stored
          exclusively on the basis of the consent obtained (Art. 6 Sect. 1 lit.
          a GDPR); this consent may be revoked at any time.
        </p>
        <p>
          You can configure your browser to notify you about the use of cookies
          and allow cookies only in individual cases, refuse the acceptance of
          cookies for specific cases, or generally exclude them, and activate
          the automatic deletion of cookies when closing the browser. Disabling
          cookies may limit the functionality of this website.
        </p>
        <p>
          Information about the cookies and services used on this website can be
          found in this privacy policy.
        </p>
        <h3>Server Log Files</h3>
        <p>
          The provider of the pages automatically collects and stores
          information in so-called server log files that your browser
          automatically transmits to us. These are:
        </p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system used</li>
          <li>Referrer URL</li>
          <li>Hostname of the accessing computer</li>
          <li>Time of the server request</li>
          <li>IP address</li>
        </ul>
        <p>These data are not merged with other data sources.</p>
        <p>
          The collection of this data is based on Art. 6 Para. 1 lit. f GDPR.
          The website operator has a legitimate interest in the technically
          error-free presentation and optimization of his website – for this
          purpose, the server log files must be recorded.
        </p>
        <h3>Request via Email, Phone, or Fax</h3>
        <p>
          If you contact us by email, phone, or fax, your request, including all
          resulting personal data (name, request), will be stored and processed
          for the purpose of processing your request. We do not disclose this
          data without your consent.
        </p>
        <p>
          The processing of this data is based on Art. 6 Para. 1 lit. b GDPR,
          insofar as your request is related to the fulfillment of a contract or
          is necessary for the implementation of pre-contractual measures. In
          all other cases, the processing is based on our legitimate interest in
          the effective processing of the inquiries directed to us (Art. 6 Para.
          1 lit. f GDPR) or on your consent (Art. 6 Para. 1 lit. a GDPR) if this
          was requested; the consent can be revoked at any time.
        </p>
        <p>
          The data you send us through contact requests will remain with us
          until you request us to delete it, revoke your consent to storage, or
          the purpose for data storage no longer applies (e.g., after the
          completion of your request). Mandatory statutory provisions –
          especially retention periods – remain unaffected.
        </p>
        <p>
          Source:
          <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
        </p> */}


    {/*  <h1>Datenschutz</h1>
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen &Uuml;berblick
          dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
          diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
          denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
          Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
          unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
        </p>
        <h3>Datenerfassung auf dieser Website</h3>
        <h4>
          Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?
        </h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt
          &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
          Datenschutzerkl&auml;rung entnehmen.
        </p>
        <h4>Wie erfassen wir Ihre Daten?</h4>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
          in ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder
          Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie diese Website betreten.
        </p>
        <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
          Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>
        <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
          Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
          personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
          Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen.
          Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
          k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft
          widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten
          Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie
          sich jederzeit an uns wenden.
        </p>
        <h2>2. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen
          Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
          vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
          sowie dieser Datenschutzerkl&auml;rung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende
          Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und
          wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem
          Zweck das geschieht.
        </p>
        <p>
          Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
          (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken
          aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff
          durch Dritte ist nicht m&ouml;glich.
        </p>
        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
          Website ist:
        </p>
        <p>
          Se&ccedil;kin Coskun<br />
          Auwiesenstrasse 68<br />
          8050 Z&uuml;rich
        </p>

        <p>
          Telefon: 076 304 95 24<br />
          E-Mail: seckin.coskun.it@hotmail.com
        </p>
        <p>
          Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
          Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und
          Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen,
          E-Mail-Adressen o. &Auml;.) entscheidet.
        </p>

        <h3>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt.
          Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine
          Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
          gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen
          Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten
          haben (z.&nbsp;B. steuer- oder handelsrechtliche
          Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
          L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
        </p>
        <h3>
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf
          dieser Website
        </h3>
        <p>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
          wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
          einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung
          personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung
          au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern
          Sie in die Speicherung von Cookies oder in den Zugriff auf
          Informationen in Ihr Endger&auml;t (z.&nbsp;B. via
          Device-Fingerprinting) eingewilligt haben, erfolgt die
          Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1
          TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher
          Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage
          des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre
          Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung
          erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
          Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
          Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die
          jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den
          folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.
        </p>
        <h3>Empfänger von personenbezogenen Daten</h3>
        <p>
          Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit
          verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine
          &Uuml;bermittlung von personenbezogenen Daten an diese externen
          Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
          externe Stellen weiter, wenn dies im Rahmen einer
          Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich hierzu
          verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an
          Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach Art. 6
          Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige
          Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
          Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden
          nur auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber
          Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung
          wird ein Vertrag &uuml;ber gemeinsame Verarbeitung geschlossen.
        </p>
        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
          ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
          bereits erteilte Einwilligung jederzeit widerrufen. Die
          Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
        </p>
        <h3>
          Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
          sowie gegen Direktwerbung (Art. 21 DSGVO)
        </h3>
        <p>
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER
          F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE
          SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG
          IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH
          F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE
          JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
          ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH
          EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT
          MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
          SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN,
          DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE
          VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG
          VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
        </p>
        <p>
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
          BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
          VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
          DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING,
          SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
          WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT
          MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
          ABS. 2 DSGVO).
        </p>
        <h3>
          Beschwerde&shy;recht bei der zust&auml;ndigen
          Aufsichts&shy;beh&ouml;rde
        </h3>
        <p>
          Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
          Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
          insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts,
          ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen
          Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet
          anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        </p>
        <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
          sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren
          Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
          &Uuml;bertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        </p>
        <h3>Auskunft, Berichtigung und L&ouml;schung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
        </p>
        <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>
        <p>
          Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
          jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der
          Verarbeitung besteht in folgenden F&auml;llen:
        </p>
        <ul>
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
            personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel
            Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der
            Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten
            unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der
            L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
            verlangen.
          </li>
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie
            sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von
            Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der
            L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen.
          </li>
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>
        </ul>
        <p>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
          eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer
          Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur
          Geltendmachung, Aus&uuml;bung oder Verteidigung von
          Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
          nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines
          wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union
          oder eines Mitgliedstaats verarbeitet werden.
        </p>
        <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
          &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
          oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-
          bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung
          erkennen Sie daran, dass die Adresszeile des Browsers von
          &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen
          die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten
          mitgelesen werden.
        </p>
        <h2>3. Datenerfassung auf dieser Website</h2>
        <h3>Cookies</h3>
        <p>
          Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;.
          Cookies sind kleine Datenpakete und richten auf Ihrem Endger&auml;t
          keinen Schaden an. Sie werden entweder vor&uuml;bergehend f&uuml;r die
          Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente
          Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden
          nach Ende Ihres Besuchs automatisch gel&ouml;scht. Permanente Cookies
          bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese selbst
          l&ouml;schen oder eine automatische L&ouml;schung durch Ihren
          Webbrowser erfolgt.
        </p>
        <p>
          Cookies k&ouml;nnen von uns (First-Party-Cookies) oder von
          Drittunternehmen stammen (sog. Third-Party-Cookies).
          Third-Party-Cookies erm&ouml;glichen die Einbindung bestimmter
          Dienstleistungen von Drittunternehmen innerhalb von Webseiten
          (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
        </p>
        <p>
          Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
          technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht
          funktionieren w&uuml;rden (z.&nbsp;B. die Warenkorbfunktion oder die
          Anzeige von Videos). Andere Cookies k&ouml;nnen zur Auswertung des
          Nutzerverhaltens oder zu Werbezwecken verwendet werden.
        </p>
        <p>
          Cookies, die zur Durchf&uuml;hrung des elektronischen
          Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
          erw&uuml;nschter Funktionen (z.&nbsp;B. f&uuml;r die
          Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B.
          Cookies zur Messung des Webpublikums) erforderlich sind (notwendige
          Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
          gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der
          Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von
          notwendigen Cookies zur technisch fehlerfreien und optimierten
          Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
          Speicherung von Cookies und vergleichbaren
          Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung
          ausschlie&szlig;lich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1
          lit. a DSGVO und &sect; 25 Abs. 1 TTDSG); die Einwilligung ist
          jederzeit widerrufbar.
        </p>
        <p>
          Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das
          Setzen von Cookies informiert werden und Cookies nur im Einzelfall
          erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder
          generell ausschlie&szlig;en sowie das automatische L&ouml;schen der
          Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der
          Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website
          eingeschr&auml;nkt sein.
        </p>
        <p>
          Welche Cookies und Dienste auf dieser Website eingesetzt werden,
          k&ouml;nnen Sie dieser Datenschutzerkl&auml;rung entnehmen.
        </p>
        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen
          in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
          &uuml;bermittelt. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird
          nicht vorgenommen.
        </p>
        <p>
          Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
          der technisch fehlerfreien Darstellung und der Optimierung seiner
          Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst
          werden.
        </p>
        <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
          Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
          (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
          gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines
          Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
          vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
          &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
          berechtigten Interesse an der effektiven Bearbeitung der an uns
          gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde; die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten
          verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre
          Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die
          Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener
          Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen
          &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash; bleiben
          unber&uuml;hrt.
        </p>
        <p>
          Quelle:
          <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
        </p> */}