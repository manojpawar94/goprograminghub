import { Tooltip, IconButton } from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  WhatsApp as WhatsAppIcon,
  Facebook as FacebookIcon,
  Email as EmailIcon,
  Dashboard as DashboardIcon
} from '@mui/icons-material';

function SocialMedia() {
    const metadata = [
        {
            name: "Linked In",
            link: "https://www.linkedin.com/in/manoj-pawar-172597b3/",
            icon: <LinkedInIcon />,
        },
        {
            name: "GitHub",
            link: "https://github.com/manojpawar94",
            icon: <GitHubIcon />,
        },
        {
            name: "WhatsApp",
            link: "https://api.whatsapp.com/send?phone=918983120926&text=Hi%2C%20Manoj",
            icon: <WhatsAppIcon />,
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/manoj.pawar.5220/",
            icon: <FacebookIcon />,
        },
        {
            name: "Gmail",
            link: "mail:mmpawar94@gmail.com",
            icon: <EmailIcon />,
        },
        {
            name: "Hacker Rank",
            link: "https://www.hackerrank.com/mmpawar94",
            icon: <DashboardIcon />,
        },
    ];

    const socialMediaLinks = metadata.map((socialMedia, index) => (
        <Tooltip key={index.toString()} title={socialMedia.name} placement="bottom">
            <IconButton
                href={socialMedia.link}
                target="_blank"
                aria-label={socialMedia.name}
                sx={{ mx: 1 }}
            >
                {socialMedia.icon}
            </IconButton>
        </Tooltip>
    ));

    return <>{socialMediaLinks}</>;
}

export default SocialMedia;
