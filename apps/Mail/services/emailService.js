import { utilService } from '../../../services/utilService.js';

export const emailService = {
    query, countUnreadEmails, deleteEmail, addNewMail, markEmailRead
}

var gEmails = getDemoEmails()

function query() {
    return Promise.resolve(gEmails)
}


function getDateFormatted(timeStamp) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var date = new Date(timeStamp)
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var day = date.getDate()
    return `${hours}:${minutes} ${day} ${monthNames[date.getMonth()]}`

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
        sentAt: getDateFormatted(Date.now()),
        fullDate: new Date()
    }
    gEmails.unshift(newMail)
}

function markEmailRead(markEmail) {
    const emailIdx = gEmails.findIndex((email) => email.id === markEmail.id)
    console.log(emailIdx)
    markEmail.isRead = !markEmail.isRead;
    gEmails[emailIdx] = markEmail;
    return Promise.resolve(gEmails);
}



function countUnreadEmails() {
    return gEmails.reduce((acc, email) => {
        if (!email.isRead) acc += 1
        return acc
    }, 0);
    // let unreadedEmailsInPrecents = `${emails / gEmails.length * 100}%`
    // return unreadedEmailsInPrecents;
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
            sentAt: getDateFormatted(1608731542),
            fullDate: new Date(1608731542)
        },
        {
            id: utilService.makeId(),
            senderName: 'moshe',
            subject: 'jobs?',
            body: 'Your job alert for full stack engineer',
            isRead: true,
            sentAt: getDateFormatted(1608731542),
            fullDate: new Date(1608731542)
        },
        {
            id: utilService.makeId(),
            senderName: 'moshe',
            subject: 'security?',
            body: 'You recently deleted 1249 files from your Dropbox',
            isRead: false,
            sentAt: getDateFormatted(1608731542),
            fullDate: new Date(1608731542)
        },
        {
            id: utilService.makeId(),
            senderName: 'mais',
            subject: 'store?',
            body: 'Your store credit is expiring soon',
            isRead: true,
            sentAt: getDateFormatted(1608731542),
            fullDate: new Date(1608731542)
        },
        {
            id: utilService.makeId(),
            senderName: 'moshe',
            subject: 'signed-in?',
            body: 'Someone signed-in to your account',
            isRead: false,
            sentAt: getDateFormatted(1608731542),
            fullDate: new Date(1608731542)
        }
    ]
    return emails
}

