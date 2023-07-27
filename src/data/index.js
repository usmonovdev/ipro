import { BsTelegram, BsInstagram, BsYoutube, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs"
import project from "../assets/images/project.png"
import staff1 from "../assets/images/testimonial-01.jpg"
import staff2 from "../assets/images/testimonial-02.jpg"
import staff3 from "../assets/images/testimonial-03.jpg"

export const languages = [
    {
        id: 1,
        lng: "en",
        name: "English"
    },
    {
        id: 2,
        lng: "ru",
        name: "Русский"
    },
    {
        id: 3,
        lng: "uz",
        name: "Uzbekcha"
    }
]

export const socials = [
    {
        id: 1,
        icon: BsTelegram,
        title: "socials.card-title",
        desc: "socials.card-desc"
    },
    {
        id: 2,
        icon: BsInstagram,
        title: "socials.card-title",
        desc: "socials.card-desc"
    },
    {
        id: 3,
        icon: BsYoutube,
        title: "socials.card-title",
        desc: "socials.card-desc"
    },
    {
        id: 4,
        icon: BsFacebook,
        title: "socials.card-title",
        desc: "socials.card-desc"
    },
    {
        id: 5,
        icon: BsLinkedin,
        title: "socials.card-title",
        desc: "socials.card-desc"
    },
    {
        id: 6,
        icon: BsTwitter,
        title: "socials.card-title",
        desc: "socials.card-desc"
    }
]

export const footerSocials = [
    {
        id: 1,
        icon: BsTelegram,
    },
    {
        id: 2,
        icon: BsInstagram
    },
    {
        id: 2,
        icon: BsYoutube
    },
    {
        id: 2,
        icon: BsFacebook
    },
    {
        id: 2,
        icon: BsLinkedin
    },
    {
        id: 2,
        icon: BsTwitter
    }
]

export const projects = [
    {
        id: 1,
        name: "projects.card.name",
        title: "projects.card.title",
        desc: "projects.card.desc",
        featureOne: "projects.card.feature.one",
        featureTwo: "projects.card.feature.two",
        featureThree: "projects.card.feature.three",
        photo: project
    },
    {
        id: 2,
        name: "projects.card.name",
        title: "projects.card.title",
        desc: "projects.card.desc",
        featureOne: "projects.card.feature.one",
        featureTwo: "projects.card.feature.two",
        featureThree: "projects.card.feature.three",
        photo: project
    },
    {
        id: 3,
        name: "projects.card.name",
        title: "projects.card.title",
        desc: "projects.card.desc",
        featureOne: "projects.card.feature.one",
        featureTwo: "projects.card.feature.two",
        featureThree: "projects.card.feature.three",
        photo: project
    }
]

export const definitions = [
    {
        id: 1,
        price: 26,
        isSupport: false,
        time: "price.time",
        name: "price.definition.one.name",
        features: {
            one: {
                title: "price.definition.one.features.one",
                isChecked: true
            },
            two: {
                title: "price.definition.one.features.two",
                isChecked: false
            },
            three: {
                title: "price.definition.one.features.three",
                isChecked: false
            },
            four: {
                title: "price.definition.one.features.four",
                isChecked: false
            },
        }
    },
    {
        id: 2,
        price: 36,
        isSupport: true,
        time: "price.time",
        name: "price.definition.two.name",
        features: {
            one: {
                title: "price.definition.two.features.one",
                isChecked: true
            },
            two: {
                title: "price.definition.two.features.two",
                isChecked: true
            },
            three: {
                title: "price.definition.two.features.three",
                isChecked: true
            },
            four: {
                title: "price.definition.two.features.four",
                isChecked: false
            },
        }
    },
    {
        id: 3,
        price: 43,
        isSupport: false,
        time: "price.time",
        name: "price.definition.three.name",
        features: {
            one: {
                title: "price.definition.three.features.one",
                isChecked: true
            },
            two: {
                title: "price.definition.three.features.two",
                isChecked: true
            },
            three: {
                title: "price.definition.three.features.three",
                isChecked: true
            },
            four: {
                title: "price.definition.three.features.four",
                isChecked: true
            },
        }
    }
]

export const staff = [
    {
        id: 1,
        name: "Jonh Doe",
        job: "UI/UX Designer",
        photo: staff1
    },
    {
        id: 2,
        name: "Usmonov Azizbek",
        job: "Frontend Developer",
        photo: staff2
    },
    {
        id: 3,
        name: "John",
        job: "Backend Developer",
        photo: staff3
    },
]