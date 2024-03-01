# response format

- multiple choice
- text (single-line / multiple-line)
- numeric scale (0-10) label and logic
- graphic scale (5-stars / thumbs / 5 smileys / 3 smileys)

# logic

- from
- to
  display a thanks message
  add a new messgae

id String @id @default(uuid())
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

type String // NPS / CES / CSAT / 5-Stars / Smileys / eNPS / Thumbs / PMF
title String // title of survey
isAnonymous Boolean @default(true) // if survey is anonymous or no
status String // sketch | test | inactive | active  
 onMobile Boolean // if survey is visible on mobile
welcomeMessage String // require Plan Plus or more
skipComment Boolean @default(false) // if skip comment in survey
commentMessage String // require Plan Plus or more
limit Int // limit of responses
image String // url for image # require Plan Plus or more
responses Response[]
question String
language String // language of survey (pt-BR/en)
timeToShow Int @default(2) // seconds for the user to see the survey

emailChannel Boolean @default(false) // survey uses a email channel
emailSent Int @default(0)
emailOpen Int @default(0)
emailResponded Int @default(0)
emailCommented Int @default(0)
emailThrottled Int @default(0)
emailBounced Int @default(0)
emailUnsubscribed Int @default(0)

emailFrom String
replyTo String
emailSubject String

linkChannel Boolean @default(false) // survey uses a link channel
linkShown Int @default(0)
linkResponded Int @default(0)
linkCommented Int @default(0)

smsChannel Boolean @default(false) // survey uses a sms channel
smsSent Int @default(0)
smsShown Int @default(0)
smsCommented Int @default(0)
smsThrottled Int @default(0)

webChannel Boolean @default(false) // survey uses a web channel
webShown Int @default(0)
webResponded Int @default(0)
webCommented Int @default(0)

isRecurrent Int

userId String
user User @relation(fields: [userId], references: [id])

flows Flow[]
