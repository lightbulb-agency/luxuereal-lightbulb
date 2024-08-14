import { ICombinedInformation, IDirectMessageItem, IInitialInformation, ITitledListItem } from "./Models";
import { supabase } from "@/util/supabaseClient";
import { Skills } from "./Models";

const userid = import.meta.env.VITE_APP_USER_ID;

const getUsers: any = await supabase.from("users").select().eq("id", userid);

const getInforms: any = await supabase.from("informations").select().eq("user_id", userid);

const getLangs: any = await supabase.from("skills").select().eq("user_id", userid).eq("type", 1);

const getFullstacks: any = await supabase.from("skills").select().eq("user_id", userid).eq("type", 2);

const getBackends: any = await supabase.from("skills").select().eq("user_id", userid).eq("type", 3); 

const getFrontends: any = await supabase.from("skills").select().eq("user_id", userid).eq("type", 4);

const getDevops: any = await supabase.from("skills").select().eq("user_id", userid).eq("type", 5);

const getContacts: any = await supabase.from("contacts").select().eq("user_id", userid);

const getExperiences: any = await supabase.from("experiences").select().eq("user_id", userid).order('id', { ascending: true });

const getProjects: any = await supabase.from("projects").select().eq("user_id", userid).order('name', { ascending: true });


class DynamicValues {
    static initialInformation: IInitialInformation = {
        iconText: "Fa",
        name: "Lux Reilly",
        occupation: "Software Engineer",
    }

    static directMessageItems: Array<IDirectMessageItem> = [
        {
            name: "WhatsApp",
            link: "https://api.whatsapp.com/send?phone=8801796306262"
        },
        {
            name: "Messenger",
            link: "https://m.me/p32929"
        },
        {
            name: "Telegram",
            link: "https://t.me/p32929"
        },

    ]

    static about: Array<ITitledListItem> = [
        {
            text: "Information",
            shouldNotSort: true,
            arr: [
                {
                    title: "Name",
                    desc: getUsers?.data[0]['name'],
                    logo: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
                },
                {
                    title: "Work Experience",
                    desc: `${getInforms?.data[0]['experience']}+ years`,
                    logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png"
                },
                {
                    title: "Languages",
                    desc: getInforms?.data[0]['language'],
                    logo: "https://cdn-icons-png.flaticon.com/128/3898/3898150.png"
                },
                {
                    title: "Nationality",
                    desc: getInforms?.data[0]['nationality'],
                    logo: getInforms?.data[0]['flag']
                },
                {
                    title: "Resume",
                    desc: "Click the link icon to view/download",
                    link: "https://docs.google.com/document/d/1vRgTCQ-UvzjGXK7s-TR5VpmjHZ7OmSmOs5G69znPhqA/edit?usp=sharing",
                    logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png"
                }
            ]
        },
        {
            text: "Experiences",
            shouldNotSort: true,
            arr: getExperiences?.data.map((experience: any) => ({
                title: experience.company,
                desc: `${experience.role} (${experience.from} ~ ${experience.to})`,
                logo: experience.logo
            }))
        }
    ]

    static skills: Array<ITitledListItem> = [
        {
            text: "Programming Languages",
            shouldNotSort: true,
            arr: getLangs?.data.map((lang: Skills) =>{ return {title: lang.name, logo: lang.symbol} } )
        },
        {
            text: "Prefered Full-stacks",
            shouldNotSort: true,
            arr: getFullstacks?.data.map((lang: Skills) =>{ return {title: lang.name, logo: lang.symbol} } )
        },
        {
            text: "Back-end Skills",
            shouldNotSort: true,
            arr: getBackends?.data.map((lang: Skills) =>{ return {title: lang.name, logo: lang.symbol} } )
        },
        {
            text: "Front-end Skills",
            shouldNotSort: true,
            arr: getFrontends?.data.map((lang: Skills) =>{ return {title: lang.name, logo: lang.symbol} } )
        },
        {
            text: "Database",
            shouldNotSort: true,
            arr: getDevops?.data.map((lang: Skills) =>{ return {title: lang.name, logo: lang.symbol} } )
        },
    ]

    static projects: Array<ITitledListItem> = [
        {
            text: "Web Apps",
            arr: getProjects?.data.map((project: any) => ({
                title: project.name,
                link: `${window.location.href}projects/${project.id}`,
                logo: project.logo,
                desc: project.description
            }))
        }
    ]

    static contacts: Array<ITitledListItem> = [
        {
            text: "Contact me",
            arr: getContacts?.data.map((contact: any) => { return {
                title: contact.toolname,
                logo: contact.logo,
                desc: contact.username,
                link: contact.link
            }})
        }
    ]
}

// 
// Dont change anything below this line
// 
export const combinedInformation: ICombinedInformation = {
    initialInformation: DynamicValues.initialInformation,
    directMessageItems: DynamicValues.directMessageItems,
    routes: [
        {
            name: "About",
            items: DynamicValues.about,
        },
        {
            name: "Skills",
            items: DynamicValues.skills,
        },
        {
            name: "Projects",
            items: DynamicValues.projects,
        },
        {
            name: "Contact",
            items: DynamicValues.contacts,
        },
    ]
}