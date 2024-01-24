var threads = [
    {
        id: 1,
        title: "Frontend vs. Backend development: Pros and cons.",
        author: "Mohammed Muflih",
        date: Date.now(),
        contents: "Frontend and backend development each come with their own set of challenges and rewards. Share your experiences and insights on the pros and cons of working on the frontend or backend of web development projects"
        ,
        comments: [
            {
                author: "Ali",
                date: Date.now(),
                content: "I've found frontend development to be more visually rewarding, but backend work is where the magic happens."
            },

            {
                author: "Saad",
                date: Date.now(),
                content: "I love the creativity in frontend, but debugging can be a puzzle"
            },
        ]
    },

    {
        id: 2,
        title: "The impact of progressive web apps on user experience",
        author: "Faisal Alkharaan",
        date: Date.now(),
        contents: "Progressive Web Apps (PWAs) have gained popularity for their ability to enhance user experience. How do PWAs impact user engagement, and what considerations should developers keep in mind when implementing them?",
        comments: [
            {
                author: "Fahad",
                date: Date.now(),
                content: "Offline functionality in PWAs has been a game-changer for our users in areas with spotty connectivity. It's amazing to see how it enhances the overall user experience"
            },

            {
                author: "Saud",
                date: Date.now(),
                content: "Accessibility is a critical aspect of web development. How do developers ensure that PWAs are not only engaging but also accessible to users with diverse needs and abilities?"
            },
        ]
    },

    {
        id: 3,
        title: "The impact of progressive web apps on user experience",
        author: "Moath",
        date: Date.now(),
        contents: "IPv6 offers a larger address space, but adoption has been slow. Discuss the challenges hindering the widespread adoption of IPv6. Let's brainstorm solutions to overcome these barriers",
        comments: [
            {
                author: "Khaled",
                date: Date.now(),
                content: "Legacy system compatibility has been a roadblock for us in transitioning to IPv6"
            },

            {
                author: "Yosef",
                date: Date.now(),
                content: "IPv4 exhaustion is a real concern, and awareness is key. We've initiated awareness campaigns within our organization to highlight the urgency of IPv6 adoption"
            },

            {
                author: "Muhannad",
                date: Date.now(),
                content: "IPv6 adoption has been an ongoing challenge, and it often feels like a chicken-and-egg problem. While the larger address space is a significant advantage, the inertia from existing IPv4 infrastructure slows down the transition. It would be interesting to hear success stories or strategies from those who have successfully migrated to IPv6 in large-scale networks"
            },
        ]
    },
]

// LOCAL STORAGE
var defaultThreads;
if(localStorage && localStorage.getItem('threads')){
    threads = JSON.parse(localStorage.getItem('threads'));
}else {
    
}