import { utilService } from '../../../services/utilService.js';

export const emailService = {
    query, countUnreadEmails, deleteEmail, addNewMail
}

var gEmails = getDemoEmails()

function query() {
    return Promise.resolve(gEmails)
}

function getDateFormatted() {
    var hours = new Date(1608731542).getHours()
    var minutes = new Date(1608731542).getMinutes()
    return `${hours}:${minutes}`

}

function deleteEmail(id) {
    console.log(id)
    var emails = gEmails;
    const filteredEmails = emails.filter((email) => { return email.id !== id })
    console.log(filteredEmails)
    gEmails = filteredEmails
    return Promise.resolve(filteredEmails);
}

function addNewMail(mailToAdd) {
    let newMail = {
        id: utilService.makeId(),
        senderName: mailToAdd.senderName,
        subject: mailToAdd.subject,
        body: mailToAdd.bodyTxt,
        isRead: false,
        sentAt: getDateFormattedNewMail(Date.now())
    }
    gEmails.unshift(newMail)
}

function getDateFormattedNewMail(timeStamp) {
    var hours = new Date(timeStamp).getHours()
    var minutes = new Date(timeStamp).getMinutes()
    return `${hours}:${minutes}`

}

function countUnreadEmails() {
    return gEmails.reduce((acc, email) => {
        if (!email.isRead) acc += 1
        return acc
    }, 0);
}


function getDemoEmails() {
    var emails = [
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
    return emails
}

