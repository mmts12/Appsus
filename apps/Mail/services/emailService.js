import { utilService } from '../../../services/utilService.js';

export const emailService = {
    query, countUnreadEmails
}

function query() {
    let emails = getDemoEmails()
    return Promise.resolve(emails)
}
getDateFormatted()
function getDateFormatted() {
    var hours = new Date(1608731542).getHours()
    var minutes = new Date(1608731542).getMinutes()
    // var zero = 0
    // if (minutes < 10) {
    //     minutes = `${zero, minutes} `;
    //     console.log(minutes)
    // }
    return `${hours}:${minutes}`

}

function countUnreadEmails() {
    var emails = getDemoEmails()
    return emails.reduce((acc, email) => {
        if (!email.isRead) acc += 1
        return acc
    }, 0);
}


function getDemoEmails() {
    return [
        {
            id: utilService.makeId(),
            senderName: 'tair',
            subject: 'Hello?',
            body: `You recently used a password to access the
                    repository at mmts12/Appsus with git 
                    using git/2.29.2.windows.2.`,
            isRead: false,
            sentAt: getDateFormatted()
        },
        {
            id: utilService.makeId(),
            senderName: 'moshe',
            subject: 'jobs?',
            body: 'Your job alert for full stack engineer',
            isRead: true,
            sentAt: getDateFormatted()
        },
        {
            id: utilService.makeId(),
            senderName: 'moshe',
            subject: 'security?',
            body: 'You recently deleted 1249 files from your Dropbox',
            isRead: false,
            sentAt: getDateFormatted()
        },
        {
            id: utilService.makeId(),
            senderName: 'moshe',
            subject: 'store?',
            body: 'Your store credit is expiring soon',
            isRead: true,
            sentAt: getDateFormatted()
        },
        {
            id: utilService.makeId(),
            senderName: 'moshe',
            subject: 'signed-in?',
            body: 'Someone signed-in to your account',
            isRead: false,
            sentAt: getDateFormatted()
        }
    ]
}

