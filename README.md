
# Page Specification

## Forum

#### Introduction

Forum is a page where people can vote on issues, express their opinions, and start proposals to build the community.

#### Should Include:
[Component] Forum Title: image background, forum title, introduction, button groups, links to subpages.

#### Subpages
There should be three subpages of forum: votes, opinions, and proposals. The general functionalities of each page are listed below.

The forum title should have an image background (with blur and brightness effect), the title, an introduction of the page, a button groups for forum rules and proposing a vote, and a row of buttons for the subpages.

### Vote Preview

The vote preview is a component of the forum page. Each vote preview should includes the title of the vote

Click to redirect to a vote-specific page.

Optional: restrictions & due date (should probably apply to proposals 
instead).


### Proposal Preview


### Opinion Preview

### Individual Vote

Should include: title, introduction, votes, summaries for each option, list of opinions.

***TODO***: click to vote (pop up a modal is better).

***TODO***: For votes with multiple options, could choose which option's opinions to display (when more than 2 are chosen, use flex-wrap for scrolling over the x-axis).

Publish opinion: pop up a modal.

***TODO***: Click to upvote an opinion. After upvoting, the userData context should include a list of all opinions being voted by the user.

### Individual Opinion


### Individual Proposal



## Learn

### Individual Article


### Compose Page


## Groups

### Structure

### Individual Group Page

## Development



## User Profile

### Structure

## About

### Structure

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
## Article

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