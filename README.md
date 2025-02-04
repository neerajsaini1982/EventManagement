# EventManagement

## There are 2 main reasons for this website.
### Fast & Easy guests checkin for an event
### Guest Invitation, Count and Checkin

This system will be used to when a HOST (H) books an event (Birthday Party) at a Business Location (BL). The initial example will be used for hosting birthday parties.

* Create a custom web application with asp.net core and google firebase.
* Create a restful api for all the events.
* A convinent way to deploy the site to Kubernetes

## Workflow below.
Below are some of the details describing the projectt and flow of data.

There are multiple roles flor this application and we will use 2 letter abbreviation for each as below.
1. SuperAdmin : **SA**
2. LocationAdmin : **LA**
3. Host :**HS**
4. Guest : **GS**
5. Staff : **ST**

![IMG_2139](https://github.com/user-attachments/assets/213be049-4b54-465c-a7b1-28de62758457)
![IMG_2138](https://github.com/user-attachments/assets/c1b0d14e-ef3d-4bfc-a9cc-a11b410d2f18)
![IMG_2137](https://github.com/user-attachments/assets/54833599-973f-48bd-bcb5-0ba935ffa072)
![IMG_2136](https://github.com/user-attachments/assets/660d600c-dffb-44f6-8cb6-d3ebc6a13cfb)
![IMG_2135](https://github.com/user-attachments/assets/c5c1d31a-ac43-4aae-ba31-345dba12864c)
![IMG_2134](https://github.com/user-attachments/assets/8ace730d-bf5d-40a7-a934-dbfccbc150c0)
![IMG_2133](https://github.com/user-attachments/assets/f7d2ff88-40b0-490c-8006-4ba529eae6fd)
![IMG_2132](https://github.com/user-attachments/assets/0d64d355-dff4-4e83-b091-6172f36f52e6)
![IMG_2131](https://github.com/user-attachments/assets/6ac7aece-84f4-4d2d-b924-a8b66887b995)
![IMG_2130](https://github.com/user-attachments/assets/a0afc9ef-94eb-4fab-9762-5fc5b91fb8df)




<img width="1013" alt="image" src="https://github.com/user-attachments/assets/e6ea78d7-98fd-4296-afa9-a4f90abf596e">

<img width="524" alt="image" src="https://github.com/user-attachments/assets/9f3e0176-6fbe-4a20-8a82-b0259f535ead">

<img width="837" alt="image" src="https://github.com/user-attachments/assets/c4b88c49-31c0-4a71-bfbf-bfd52d19c187">

<img width="655" alt="image" src="https://github.com/user-attachments/assets/bdbbeb93-85f3-453c-95e8-36552ed39e1d">

<img width="999" alt="image" src="https://github.com/user-attachments/assets/715347fc-1ec2-48fb-a173-2fd39d1ecbc9">


## Development Instructions
1. This application should support multi language. To start we need English and Spanish.
2. Technologie used will be Asp.Net Core, C#, Google Firebase. 
3. All the major interactions needs to be logged. If we can make use of Elastic search that will be great.
4. Project needs to be easily deployable with 1 click.
5. Loading of the application is very important. It has to be fast all the time.
6. Need to find a solution to send emails and text messages.
7. You are able to advise a technology, if something works best for our work.
8. Code releases will follow semantic versioning.
9. Site needs to adjust automatically on phones and web and all browsers.
10. API endpoint needs to be clearly defined and approved.
11. We will never delete a record but archieve it.
12. If Guest or other information is updated, we need to see logs or something with that details. Some information will be visible to LA and other only to SA.

<img width="764" alt="image" src="https://github.com/user-attachments/assets/084407aa-5615-4b83-b897-4d7434e85018">
<img width="839" alt="image" src="https://github.com/user-attachments/assets/d1808a75-f5f2-47fa-96dc-b580fce75adc">
<img width="749" alt="image" src="https://github.com/user-attachments/assets/df507d57-c0ff-470d-b3d6-413770898b3e">

## Libraries
This site was built using [SHADCN](https://ui.shadcn.com).

## Super Admin - SA
1. As an SA user I am able to CRUD a location.
2. As an SA user I am able to configure email settings. This is appricable to all the locations. (Need to discuss if this can be configured by location, mainly customized for a location)
3. As an SA user I am able to text settings.This is appricable to all the locations. (Need to discuss if this can be configured by location, mainly customized for a location)
4. As an SA user I am able to see all the reports for all the locations.
5. As an SA user I am able to login to system
6. As an SA user I am able to create, block users for a location.
7. As an SA user I am able to reset password or send email to reset password for an Admin or Guest.
8. As an SA user I am able to see different reports. report later
9. As an SA user I am able to see logs for a location or event.
10. As an SA user, I need to see how different users are created for this system. 

## Location Admin - LA
1. As a LA user I am able to CRUD links for the bookings
2. As a LA, I am able to write some rules and regulations from the business. This section will be visible in the invitation as well.
3. As a LA, I am able to see all the Events and its related details.
4. As a LA, I can send the invitation link to the Host.

## HOST - HT
1. As a HT, I am able to write some notes. This section will be visible in the invitation as well.
2. As a HT, I am able to show/hide my email and phone to the guests.
3. As a HT, I am able to see all of my events.
4. As a HT, I can send the invitation link to the GT again.
5. As a HT

6. 
## Guest - GT
1.As a Guest I will receieve an email with the invitation link. and some basic details
2. As an Guest user, I have the option to create my account or just respond to the invitation as unauthorized user.
3. As a Guest if I create my account, I will save my information for any future events etc.
4. As a Guest I will respond to the Invitation, If I am attending or not.
5. As a Guest I will confirm how many family members will be attending.
6. As a Guest I will put name and DOB  for the family members.
7. As a Guest I am able to change/Update my response before the invitation date.
 
## API Endpoints
### Location
1. GET : /locations
2. POST : /locations/location
3. GET : /locations/location/settings
4. POST : /locations/location/settings

### Event
1. GET : /events
2. GET : /locations/location/events
3. POST : /locations/location/events/event
4. GET : /locations/location/events/guests
5. POST : /locations/location/events/event/invitations
6. GET : /locations/location/events/event/rsvp


## Data Elements
Some of the data elements will look like this. WIP
<img width="1018" alt="image" src="https://github.com/user-attachments/assets/e8330c77-385c-4901-975a-fe4e0f856a30">



## System use instructions



## Known Issues



There are multiple roles in this application 
SuperAdmin
Admin
Host
Guest

## Screens
<img width="482" alt="image" src="https://github.com/user-attachments/assets/faecaa76-f0ce-4811-9dff-3c2d72067cb7">
<img width="1052" alt="image" src="https://github.com/user-attachments/assets/676e01d0-07e2-40fd-82bb-6d98eda82788">

<img width="1055" alt="image" src="https://github.com/user-attachments/assets/5391d75c-cbe1-4499-ae2b-ade8c41a284b">
<img width="1057" alt="image" src="https://github.com/user-attachments/assets/26e4f1e5-0b8a-446c-b403-01a0edcdac78">



The workflow starts when new booking is complete. A system will send an Email & Text to the customer who is hosting the birthday.
There is a unique link created for every event.
There is a page where a customer can send invitation to his guests.
There is some standard textswill be visible from the business and some custom text that customer can add.
There is a  page for guests to view the invitation with option to accept/reject and maybe. They will also add how many kids and adults will be attending with their name and date of birth. There should be a section for them to mention any special requests.
There is a page for Host to see who all have and haven't responded to the invitation.
Admin can also see all the activities for the events for his location
SuperAdmin can see all the activities for for the events for all the locaitons.
When the guest arrive at a location and they will show a QR Code for his invitation and location scans and confirm the invitation and give a wristband to the guests.
There can be some members of the Guest family arriving at different times. There should be an option to checkin for them.
There should be an option to change the background of the invitation page.
There will be a page for admin to add rules and regulations for a location. it may be on the same or seperate page of the invitation (needs to decide later)
At the end of the event. Admin will mark the event completed which will send guest list to the Host.
.


