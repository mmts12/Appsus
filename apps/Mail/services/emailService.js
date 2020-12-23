import { utilService } from '../../../services/util-service.js';

export const emailService = {
    query
}

function query() {
    let emails = getDemoEmails()
    return Promise.resolve(emails)
}

function getDemoEmails() {
    return [
        {
            id: utilService.makeId(),
            senderName: 'moshe',
            subject: 'Hello?',
            body: 'Pick up!',
            isRead: false,
            sentAt: new Date().toString()
        },
        {
            id: utilService.makeId(),
            senderName: 'moshe',
            subject: 'Wassap?',
            body: 'Pick up!',
            isRead: false,
            sentAt: new Date().toString()
        },
        {
            id: utilService.makeId(),
            senderName: 'moshe',
            subject: 'Wassap?',
            body: 'Pick up!',
            isRead: false,
            sentAt: new Date().toString()
        }
    ]
}

