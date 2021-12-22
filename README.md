
### Overview

**Everywear Threads** 

Everywear Threads is an inclusive second-hand fashion marketplace app where people can search by brands, style and size and find new outfit insipration. Our goal is for users to have a pleasant UI experience while browsing our shop's items, adding/editing their own, and signing up for a personal account. 

<br>

#### Team Expectations

[Google Doc](https://docs.google.com/document/d/193hz7hk5Lj7erhBRmQaSAtqgyl4XC_lg6NIFy0grh_M/edit?usp=sharing)


<br>

### Wireframes
***


![here](https://i.ibb.co/XDYtv0H/Screen-Shot-2021-12-22-at-11-16-25.png)

- Desktop Landing

![here](https://i.ibb.co/ggTcc9J/Screen-Shot-2021-12-22-at-11-16-52.png)

- Desktop Items

![here](https://i.ibb.co/SVM7BWP/Screen-Shot-2021-12-22-at-11-17-31.png)

- Desktop Item Details

![here](https://i.ibb.co/HnvBXNH/Screen-Shot-2021-12-22-at-11-17-04.png)

- Desktop Add Item


![here](https://i.ibb.co/DGSRDsY/Screen-Shot-2021-12-22-at-11-17-13.png)

- Desktop Sign Up

![here](https://i.ibb.co/5MpzHjk/Screen-Shot-2021-12-22-at-11-17-21.png)

- Desktop Login


<br>

#### Flowcharts
***

![flowchart](https://i.ibb.co/sJmvvgV/Screen-Shot-2021-12-22-at-11-31-26.png)

- Backend

![flowchart](https://i.ibb.co/JFXFCrd/Screen-Shot-2021-12-22-at-11-31-18.png)

- Frontend
<br>

#### Schemas


#### User

```
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
)
export default mongoose.model('users', User)
```

<br>

#### Product
```
const Schema = mongoose.Schema;

const Product = new Schema(
	{
		price: {type: String, required: true},
		item: {type: String, required: true},
		size: {type: String, required: true},
		style: {type: String, required: true},
    color: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    imgURL: { type: String, required: true },
	},
	{ timestamp: true }
)

export default mongoose.model('products', Product)
```
<br>



### MVP

[GitHub Projects](https://github.com/KaleChip24/everywear-threads/projects/1)

#### Client (Front End)
***
 - Have a working, interactive React app, built using npx create-react-app client
 - Have at least 6 separate, rendered components in an organized and understandable React file structure
 - Utilize React Router, for client-side routing
 - Authentication
 - Home Screen
 - Listing Screen
 - Detail Screen
 - Be styled with CSS
 - Deploy the fully functional front-end via Netlify.

 ***
 #### Server (Backend)
 - Have working generic controller actions for full-CRUD using Express, Mongoose, and MongoDB
 - Authentication
 - Deploy the back-end via Heroku
 - Deploy the MongoDB database on MongoDB Atlas

<br>



### Post-MVP

- Add shopping cart
-

<br>

***


### Code Showcase

```
code snippet here
```

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
