const person = {
    name: 'WooJinJung',
    address: {
        line1: 'ShinChon',
        city: 'Seoul',
        country: 'Korea',
    },
    profiles: ['instagram', 'jwj970919', 'facebook'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[2]}</div>
            <div>{person.printProfile() }</div>
        </>
    )
}