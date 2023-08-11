function SocialMedia() {
    const metadata = [
        {
            src: "assets/images/media/linkedIn.png",
            name: "Linked In",
            link: "https://www.linkedin.com/in/manoj-pawar-172597b3/",
            icon: "bi bi-linkedin",
        },
        {
            src: "assets/images/media/github.png",
            name: "GitHub",
            link: "https://github.com/manojpawar94",
            icon: "bi bi-github",
        },
        {
            src: "assets/images/media/whatsApp.png",
            name: "WhatsApp",
            link: "https://api.whatsapp.com/send?phone=918983120926&text=Hi%2C%20Manoj",
            icon: "bi bi-whatsapp",
        },
        {
            src: "assets/images/media/facebook.jpg",
            name: "Facebook",
            link: "https://www.facebook.com/manoj.pawar.5220/",
            icon: "bi bi-facebook",
        },
        {
            src: "assets/images/media/gmail.png",
            name: "Gmail",
            link: "mail:mmpawar94@gmail.com",
            icon: "bi bi-envelope-fill",
        },
        {
            src: "assets/images/media/hackRank.png",
            name: "Hacker Rank",
            link: "https://www.hackerrank.com/mmpawar94",
            icon: "bi bi-kanban",
        },
    ];

    const socialMediaLinks = metadata.map((socialMedia, index) => (
        <a
            href={socialMedia.link}
            key={index.toString()}
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            className="me-3 social-media-icon"
        >
            <em
                className={socialMedia.icon}
                role="img"
                aria-label={socialMedia.name}
            ></em>
        </a>
    ));

    return <>{socialMediaLinks}</>;
}

export default SocialMedia;
