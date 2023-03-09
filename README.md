
# Data Model


## User
User is split into two collections, userInfo and userDetails.
userInfo is accessed to get the portrait (name & photo).
```
const userInfo = {
    id: uid,
    displayName: String,
    photoURL: String
};
```
userDetails is accessed in the profile page.
```
const userDetails = {
    id: uid,
    firstName: String,
    lastName: String,
    email: String,
    joinDate: Timestamp,
    points: Number,
    articles: [
        ...articleIds
    ],
    opinions: [
        ...opinionsIds
    ],
    votes: [
        {
            id: voteId,
            option: String
        }
    ],
    groups: [
        ...groupIds
    ],
    // to be implemented
    badges: [
        badgeName: String,
        achievedDate: Timestamp
    ],
    followers: [
        ...followerIds
    ],
    following: [
        ...followingIds
    ],
    upvotedArticles: [
        ...articleIds
    ],
    upvotedOpinions: [
        ...opinionIds
    ]
};
```

## Vote
Each vote is represented by a document with subcollections.
```
const voteInfo = {
    id: randomId,
    title: String,
    topics: [
        String
    ],
    options: [
        {
            title: String,
            votes: 0,
        }
    ],
    voteRestriction: [
        ...groupIds
    ],
    viewRestriction: [
        ...groupIds
    ]
};
```
Each subcollection contains the opinions for one option, the title of which is the title of the option.
Each opinion will have its unique id, which will also be stored in userDetails.
```
const opinions = {
    id: randomId,
    userId: uid,
    publishDate: Timestamp,
    text: String,
    upvotes: Number
}
```
##Article
```
const article = {
    id: randomId,
    author: uid,
    title: String,
    titleImgURL: String,
    upvotes: Number,
    topics: [
        String,
    ],
    content: [
        {
            type: "P",
            text: String
        },
        {
            type: "Q",
            author: String,
            source: String
        },
        {
            type: "IMG",
            src: String
        },
    ]
}
```

## Group
```
const group = {
    id: randomId,
    name: String,
    members: [
        ...memberIds
    ],
    type: "SCHOOL",
    groupVotes: groupVotes,
    // to be implemented
    joinMethod: "INVITE_CODE",
    inviteCodes: [
        ...availableInviteCode
    ],
    votes: [
        ...voteIds  // votes that has voting restrictions
    ]
};
```

## Team
Jinzhou Wu
Yinglun Wang