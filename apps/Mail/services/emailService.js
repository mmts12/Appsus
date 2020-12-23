import { utilService } from '../../../services/util-service.js';

export const emailService = {
    query
}

function query() {
    let emails = getDemoEmails()
    return Promise.resolve(emails)
}
getDateFormatted()
function getDateFormatted() {
    var hours = new Date().getHours()
    var minutes = new Date().getMinutes()
    // var zero = 0
    // if (minutes < 10) {
    //     minutes = `${zero, minutes} `;
    //     console.log(minutes)
    // }
    return `${hours}:${minutes}`

}

function getDemoEmails() {
    return [
        {
            id: utilService.makeId(),
            senderName: 'moshe',
            subject: 'Hello?',
            body: 'Pick up!',
            isRead: false,
            sentAt: getDateFormatted()
        },
        {
            id: utilService.makeId(),
            senderName: 'moshe',
            subject: 'Wassap?',
            body: 'Pick up!',
            isRead: false,
            sentAt: getDateFormatted()
        },
        {
            id: utilService.makeId(),
            senderName: 'moshe',
            subject: 'Wassap?',
            body: 'Pick up!',
            isRead: false,
            sentAt: getDateFormatted()
        }
    ]
}

