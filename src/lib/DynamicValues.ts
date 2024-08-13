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
            arr: [
                {
                    title: "Duas",
                    link: "https://p32929.github.io/duas/",
                    logo: "https://p32929.github.io/duas/favicon.png",
                    desc: "A collection of duas I try to regularly recite - created using flutter web",

                },
                {
                    title: "dobd.xyz",
                    link: "https://admui.vercel.app",
                    logo: "https://admui.vercel.app/android-chrome-512x512.png",
                    desc: "Best online downloader for YouTube, Facebook, Instagram, Tiktok and more",

                },
                {
                    title: 'StartPage',
                    logo: 'https://cdn.iconscout.com/icon/premium/png-128-thumb/homepage-2580329-2151669.png',
                    desc: 'A minimalistic custom browser startpage that can be configured to your needs. ',
                    link: 'https://p32929.github.io/startpage/'
                },
                {
                    title: "s3cr3tm3",
                    link: "https://s3cr3tm3.netlify.app/",
                    logo: "https://user-images.githubusercontent.com/6418354/173877444-59dbdd3d-1b5d-4b92-ad53-30fada9362d2.png",
                    desc: "Share secret messages secretely",

                },
                {
                    title: 'OrderZesty',
                    logo: 'https://orderzesty.com/wp-content/uploads/2021/10/Zesty-icon@3x-300x300.png',
                    desc: 'Personal chef service delivering fresh signature meals.',
                    link: 'https://orderzesty.com/',

                },
                {
                    title: 'DramaDB',
                    logo: 'https://dramadb.vercel.app/apple-icon.png',
                    desc: 'A serverless hobby project that lets you filter Asian drama by country, genre, status, year and popularity',
                    link: 'https://dramadb.vercel.app/'
                },
                {
                    title: 'Sh0Sh0',
                    logo: 'https://github.com/3r4y/react-portfolio-template/assets/6418354/a159e1d8-fabc-4f58-9391-0c3be4d14d7e',
                    desc: 'A beautifully created Absolutely FREE URL shortener for everyone made using React Shadcn Firebase. ',
                    link: 'https://sh0sh0.netlify.app/',
                },
                {
                    title: "TheRealWorldFree",
                    logo: "https://framerusercontent.com/images/Tttp7tCHSlFL4GgIF783y9wn7vQ.webp",
                    desc: "Enjoy the real world for free :)",
                    link: "https://trwfree.vercel.app/"
                },
                {
                    title: "BreakingMars",
                    logo: "https://github.com/p32929/portfolio-v2/assets/6418354/8b6c5a1c-fc31-44a8-822e-73814ff57ac3",
                    desc: '#1 Leading & Effortless Prospect Perceiving Platform',
                    link: "https://web.archive.org/web/20220413085335/https://www.breakingmars.com/"
                },
                {
                    title: "Voomnow",
                    desc: "Next generation audio recorder",
                    logo: "https://user-images.githubusercontent.com/6418354/173876916-e27cb77f-49f1-4190-be54-4c1ddaa2973d.svg",
                    link: "https://web.archive.org/web/20220326215025/https://www.voomnow.com/"
                },
                {
                    title: 'Shajao',
                    logo: 'https://sdn.signalhire.co/storage/company/1dfc/9704/f9d3/ff49/cdce/31bb/c4d7/0628.webp',
                    desc: 'Framing Happiness',
                    link: "https://web.archive.org/web/20191222090655/https://shajao.com/"
                },
                {
                    title: 'ChargeOnSite',
                    logo: 'https://static.wixstatic.com/media/182a81_c4e4ee2bac6d4389a866239475519bdf~mv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/182a81_c4e4ee2bac6d4389a866239475519bdf~mv2.png',
                    desc: 'Charge OnSite',
                    link: "https://www.chargeonsite.com/",
                },
                {
                    title: 'MathFinity',
                    logo: 'https://p32929.github.io/mathfinity/icons/Icon-192.png',
                    desc: 'Simple, infinite & fun math game for everyone',
                    link: "https://p32929.github.io/mathfinity/",

                },

            ]
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