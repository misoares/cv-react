import { EmailLogo, LinkedinLogo, GithubLogo } from "../components/logos";
import { IContact } from "../models/interfaces";

export const contactsData:IContact[] = [
    {
        contact: 'mssoares5@gmail.com',
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