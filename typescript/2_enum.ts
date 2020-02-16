enum Membership {
  Simple, 
  Standard, 
  Premium,
}

const membership = Membership.Standard
const membershipReverse = Membership[2]

console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
  'VK' = 'VKontacte',
  'FB' = 'FaceBook',
  'INST' = 'Instagram'
}

const social = SocialMedia.FB
console.log(social)