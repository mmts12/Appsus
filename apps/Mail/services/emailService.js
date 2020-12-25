import { utilService } from '../../../services/utilService.js';

export const emailService = {
    query, countUnreadEmails, deleteEmail, addNewMail, markEmailRead, getEmailById,
    markEmailStared, getIdForNavigation, getDeletedEmails, markEmailReaded
}

var gEmails = getDemoEmails()
var gDeletedEmails = [];


function query() {
    return Promise.resolve(gEmails)
}
function getDeletedEmails() {
    return Promise.resolve(gDeletedEmails)
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

function getIdForNavigation(currId) {
    const emailIdx = gEmails.findIndex((email) => email.id === currId)
    let navId = {}
    if (gEmails[emailIdx + 1]) navId.next = gEmails[emailIdx + 1].id
    if (gEmails[emailIdx - 1]) navId.prev = gEmails[emailIdx - 1].id
    return Promise.resolve(navId);

}

function addDeletedMailTolist(id) {
    let email = _getEmailById(id)
    gDeletedEmails.push(email);
}

function deleteEmail(id) {
    addDeletedMailTolist(id)
    const emailIdx = gEmails.findIndex((email) => email.id === id)
    var emails = gEmails;
    const filteredEmails = emails.filter((email) => { return email.id !== id })
    gEmails[emailIdx].isDeleted = true;
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
        isSent: true,
        isStar: false,
        isDeleted: false,
        sentAt: getDateFormatted(Date.now()),
        fullDate: new Date(),
        senderEmail: 'mmts12@gmail.com'
    }
    gEmails.unshift(newMail)
}

function getEmailById(mailId) {
    let email = gEmails.find((mail) => mail.id === mailId)
    return Promise.resolve(email);
}
function _getEmailById(mailId) {
    let email = gEmails.find((mail) => mail.id === mailId)
    return email;
}

function markEmailStared(id) {
    const emailIdx = gEmails.findIndex((email) => email.id === id)
    let emails = gEmails;
    emails[emailIdx].isStar = !emails[emailIdx].isStar;
    gEmails = emails;

}

function markEmailRead(markEmail) {
    const emailIdx = gEmails.findIndex((email) => email.id === markEmail.id)
    console.log(emailIdx)
    markEmail.isRead = !markEmail.isRead;
    gEmails[emailIdx] = markEmail;
    return Promise.resolve(gEmails);
}
function markEmailReaded(markEmail) {
    const emailIdx = gEmails.findIndex((email) => email.id === markEmail.id)
    console.log(emailIdx)
    markEmail.isRead = true;
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
            senderName: 'LinkedIn‏',
            subject: 'Toptal is looking for: React Developer (Remote)',
            body: `
Web Developer II
Shutterfly, Inc. · Haifa, IL

Actively recruiting

PerfectaHR	
Frontend Developer
PerfectaHR · Israel

Actively recruiting

CodeValue	
Node.js Developer
CodeValue · Herzliya, IL
Actively recruiting

Frontend Developer - NEW
Ethosia · Petaẖ Tiqwa, Central, Israel

Actively recruiting

Front End Developer - Analytics group
AppsFlyer · Herzliyya, IL

Actively recruiting

Infinidat	
Frontend Developer
Infinidat · Herzliyya, IL

    
Actively recruiting

Dell	
Graduate Software Engineer
Dell · Haifa, IL

Actively recruiting
    
Fiverr	
Front End Developer
Fiverr · Tel Aviv, IL

Actively recruiting`,
            isRead: false,
            isStar: true,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1608731542),
            fullDate: new Date(1608731542),
            senderEmail: 'jobs-listings@linkedin.com',

        },
        {
            id: utilService.makeId(),
            senderName: 'Dropbox‏ ',
            subject: 'You deleted 1249 files from Dropbox',
            body: `
    you recently deleted 1249 files from your Dropbox account. If you want these files back, 
    you can still restore them until 14/1/2021. After that, they’ll be permanently deleted.

    These are the files you deleted:
    
            basics.js and 80 files from the shared folder CaNov20-ExcerciseSubmission
    15/12/2020 8:57 PM using Windows 10 2009	See deleted files
    
    And 1168 more files
    
    Thanks,
    The Dropbox Team	`,
            isRead: true,
            isStar: true,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1608731542),
            fullDate: new Date(1608731542),
            senderEmail: 'no-reply@dropboxmail.com‏'
        },
        {
            id: utilService.makeId(),
            senderName: 'Coursera‏ ',
            subject: 'Terms of Use and Privacy Notice Update',
            body: `
Coursera Terms of Use and Privacy Notice Update

Hello Moshiko Malka,

As part of our ongoing efforts to provide the best service to learners, customers, and partners, we will be updating some of our policies. Effective January 1, 2021, an updated Terms of Use and Privacy Notice will be in place on Coursera.

These changes reflect current standards, as well as having more transparency about the data we collect and how we use it. The updates also provide more clarity for learners to understand Coursera’s services and new product offerings.

For your convenience, here is a brief summary of the changes to each policy. We encourage you to review each one in full.
Terms of Use: Updated arbitration language and increased clarity of definitions.
Privacy Notice: Updated for increased clarity of definitions and learner processes, added new EU representative, removed Standards Contractual Clauses.
Thank you,
            `,
            isRead: false,
            isStar: false,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1608731542),
            fullDate: new Date(1608731542),
            senderEmail: 'no-reply@t.mail.coursera.org'
        },
        {
            id: utilService.makeId(),
            senderName: 'Skrill‏',
            subject: 'Important Updates About Skrill Fees',
            body: `
spacer
Dear Moshe,
spacer
We are writing to inform you that we are making changes to some of the Skrill Fees.

As of 22 February 2021 the following Fees shall apply:
Currency conversion Fee – 4.49% per transaction added to the Skrill wholesale exchange rates;
Withdrawal Fee from Skrill Account to a NETELLER Account – 3.49% per transaction;
International transfer send money Fee for the use of Skrill Money Transfer – up to 4.99% per transaction - applicable to international money transfers in the same send and receive currency only.
International transfer send money FX markup Fee - up to 4.99% per transaction.
You can also find the upcoming updated Skrill Fees following this link.

These changes shall apply automatically to the services Skrill provides to you on the date shown above.

If you have any questions, please contact us.

Sincerely,
            `,
            isRead: true,
            isStar: false,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1608731542),
            fullDate: new Date(1608731542),
            senderEmail: 'skrill@news.skrill.com'
        },
        {
            id: utilService.makeId(),
            senderName: 'The Quora Team',
            subject: 'Updates to our Terms of Service and Privacy Policy',
            body: ` 
Hello,

Quora is growing around the world and we are continuing to add features and services. 
In doing so, we are updating our Terms of Service and Privacy Policy to reflect these and other changes. 
Some key changes include additions about 
Quora’s Spaces product, more details about email digests, and more options about connecting with your contacts on Quora. 
These updated terms will go into effect on January 8, 2021, 
and your continued use of the service after that time constitutes acceptance. We encourage you to read both updated documents.
                    
Thank you for being a part of Quora.
                    
Sincerely,
The Quora Team`,
            isRead: false,
            isStar: false,
            isSent: false,
            isDeleted: false,
            sentAt: getDateFormatted(1608731542),
            fullDate: new Date(1608731542),
            senderEmail: 'noreply@quora.com‏'
        }
    ]
    return emails
}

