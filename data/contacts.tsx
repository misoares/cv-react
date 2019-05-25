import { EmailLogo, LinkedinLogo, GithubLogo } from "../components/logos";
import { IContact } from "../interfaces/interfaces";

export const contactsData:IContact[] = [
    {
        contact: 'miguel@misoares.ch',
        icon: <EmailLogo />
    },
    {
        contact: 'linkedin.com/in/misoares',
        icon: <LinkedinLogo />
    },
    {
        contact: 'github.com/misoares',
        icon: <GithubLogo />
    },
]