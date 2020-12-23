
export const mailService = {
    query
}

function query() {
    let emails = getDemoEmails()
    return Promise.resolve(emails)
}

function getDemoEmails() {
    return [
        {
            senderName: 'moshe',
            subject: 'Hello?',
            body: 'Pick up!',
            isRead: false,
            sentAt: new Date().toString()
        },
        {
            senderName: 'moshe',
            subject: 'Wassap?',
            body: 'Pick up!',
            isRead: false,
            sentAt: new Date().toString()
        },
        {
            senderName: 'moshe',
            subject: 'Wassap?',
            body: 'Pick up!',
            isRead: false,
            sentAt: new Date().toString()
        }
    ]
}

