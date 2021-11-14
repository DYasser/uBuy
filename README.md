# UBuy 
 
To create this project I used [`Angular`](https://github.com/angular/angular) for all front-end tasks and [`NodeJs`](https://github.com/nodejs/node) for the [back-end](https://github.com/DYasser/uBuyApi). 

## How to run

Clone the repository using `git clone https://www.github.com/DYasser/uBuy.git` then set up angular and nodejs before opening the folder. Open the folder and run in git bash or any command-line interpreter the command `npm start` to start the nodeJs server, then type `npm start` or `ng serve` inside the client folder to run the angular server.

Finally, open `localhost:4200` in your browser to be able to see the chat and use it.

## What is it about 

The project I coded is a shopping website. It is a fully working website where the user is able to log in, register, and add products to his cart then proceed to pay. I used `Angular` and `NodeJs` to create the website with its front end and back end API that controls all the relations with the database.

I developed my project using the framework Angular that uses `HTML`, `CSS`, `Typescript`, `JSON files`, and many others. `NojeJs` mainly uses `JavaScript` to control the database relations from there.

## Overview

Shopping websites are getting more and more abundant in the World Wide Web. The Internet in general is getting bigger every day, and many businesses use it to their advantage by creating a website to show their business or product to the world. 

Web development is a skill I value and I am grateful that we have the opportunity this semester to hone it and master the most of it. 

I named my shopping website “UBuy” to make it simple and rememberable by the visitors in the future. I made it fully working using many functions that legitimate websites such as Amazon or TaoBao use. 

## Application

When the user first enters the website, they find themselves in the login page where they are asked to provide a username and a password in order to browse through the website and buy items. In this state of the user, there is no way to go to the home screen where all the products are presented unless the user logs in.

![image](https://user-images.githubusercontent.com/48309505/130566885-452c68dd-079d-4724-9a51-00c8219d409c.png)

As we can see in the picture above that the only menus available for the user to browse through are `Login`, `Register`, and `Reset Password`. If the user doesn’t use a correct username of password, the website shows that the information is incorrect as shown here:

<p align="center">
  <img src="https://user-images.githubusercontent.com/48309505/130565365-6d75d7af-ddbc-4aa6-baa3-4150772f3710.png" />
</p>

If the user doesn’t have an account he can always go to the `register` screen and create an account by giving a username, email, password, and an answer to incase he ever forgets his password to be able to reset it.

![image](https://user-images.githubusercontent.com/48309505/130566845-4fca2b98-9f45-4adb-b782-2296073f30da.png)

After creating an account and not remembering the password, the user visits the `Reset Password` page to get his new password that he can use to login.

<p align="center">
  <img src="https://user-images.githubusercontent.com/48309505/130565437-fad9b4b3-e224-4410-b706-8e5edec857b2.png" />
</p>

After finally having an account and login in without any problem, the user can finally browse through the gallery of products shown in the home page.
	
When in the home page, the user is able to filter the product by price. So, if the user has a certain price that he is willing to spend he is able to find a product easier this way. They are also able to have more information about a certain product by clicking on the `more info` button just near the `add to cart` button. When the user clicks on the add to cart button, he is adding the element to the cart as shown below.

![image](https://user-images.githubusercontent.com/48309505/130566814-22270654-4775-43d7-9ca5-7f828a41e369.png)

We can see that the product is added to the cart showing the total and having an option to remove it from the cart, as well as having the cart button in the top right corner having a small *1* added there instead of *0* to show how many items are added at any point. We can also notice that there are no more `login`, `register`, or `reset password` options in the navigation bar, since the user already connected himself.

When the user clicks on the `more info` button he is then able to see more information about all the items but specifically the item he picked as we can see below.

![image](https://user-images.githubusercontent.com/48309505/130566791-7c83ca08-a7d4-4c90-87cf-5f0525000fc4.png)

After visiting all their options and adding many items to their cart,	the users can proceed by clicking on the cart or total to get to the next screen that shows them their information to make sure that they are sure of what they chose.

![image](https://user-images.githubusercontent.com/48309505/130566744-61ab864f-3f1f-4c7d-bd88-173af2229219.png)

After verifying their info, the users can proceed by clicking on the ‘proceed to order’ button. They will arrive at the final screen that is the order screen.

The user is supposed to enter his information (first name, family name, address, bank card information, country, zip code, etc.), with the ability to redeem a promotion code if they have it.

![image](https://user-images.githubusercontent.com/48309505/130566618-8d4eb7ec-eaa5-4712-be06-e90dafcdfe01.png)

If the user types ‘books’ in the redeem code area he can get a small reduction on his total as shown here:

<p align="center">
  <img src="https://user-images.githubusercontent.com/48309505/130565867-d7a3ff6a-889f-4792-9bbf-6c3b105c19fc.png" />
</p>

Finally, the user can proceed to checkout and will be redirected to the home page where he can order more products for himself. 

I added an option to subscribe to the website newsletter that is shown at all points in the footer of the website, when the user enters an email and clicks on the subscribe button the website shows that it was successful by showing a message on the top right corner.

![image](https://user-images.githubusercontent.com/48309505/130566920-9c96e7e3-8a52-436e-9cc1-8fb2c6f24fd5.png)

## Important Code

While coding this website I was challenged to code more and more functions that I never had the chance to before, which helped me develop a lot as a coder.

So, I will be explaining many important codes in this section:

```html
<div class="wrapper fadeInDown">
    <div id="formContent">
    <div class="fadeIn first" >
        <mat-icon>login</mat-icon>
    </div>
    
    <form [formGroup]="formVar">
        <input type="text" id="login" formControlName="username" class="fadeIn second" placeholder="Username" >
        <input type="password" id="password" formControlName="password" class="fadeIn third" placeholder="Password" >
        <input type="submit" class="fadeIn fourth" value="Log In" (click) = "login()">
    </form>
    
    <h5 style="color: red;" *ngIf="login(formVar.value.username, formVar.value.password)"> No Match </h5>

    <div id="formFooter">
        <a class="underlineHover" 
        [routerLink]="['/reset-password']" routerLinkActive="active">Forgot Password?</a>
    </div>
    </div>
</div>
```

In this code we are able to login into the website if the login information is correct and that’s what is getting checked when the user clicks on the login button.

For the home page of the website, I decided to part it in 3 columns, one for the filter, one for the products, and a last one for the cart.

```html
<div class="row">
    <div class="col">
        <app-filters></app-filters>
    </div>
    <div class="col-md-8">
        <app-product-list></app-product-list>
    </div>
    <div class="col">
        <app-cart></app-cart>
    </div>
</div>
```

For the filter, I created a form that holds all the values and when clicked on the filter elements button the products get selected from the item list then gets added to cart that is shown in the website.

```html
<div class="card filters">
    <div class="card-header">
        <b>Filter by price</b>
    </div>
    <div class="card-body">
        <form #priceFilter = "ngForm" (ngSubmit) = "onClickSubmit(priceFilter.value)" >
            <div class="form-group">
                <label for="from">Max</label>
                <input type="number" id="from" class="form-control" name = "maximum" placeholder = "Maximum" [value]="max" ngModel required >
            </div>
            <div class="form-group">
                <label for="to">Min</label>
                <input type="number" id="to" class="form-control" name = "minimum" placeholder = "Minimum" [value]="min" ngModel required >
            </div>
            <button class="btn btn-success btn-block ">Search</button>
        </form>
        <button class="btn btn-primary btn-block " id="reset" (click) = "reset()">Reset</button>
    </div>
</div>
```

The items get added into the cart, in the cart component we have a loop that goes through all the items inside the cart items.

```html
<div *ngIf= "publicReference.cartItems.length === 0" class="alert alert-info" style="font-size: larger;">Your Cart is Empty!</div>

<ul  *ngIf= "publicReference.cartItems.length > 0" class="list-group">
    <li class="list-group-item items" *ngFor="let item of publicReference.cartItems">
        <app-cart-item [cartItem] = 'item'></app-cart-item>
    </li>
    <li class="list-group-item active" id="total" (click)="gotoCart()">
        <h5>
            <strong>
                Total: {{ publicReference.cartTotal | currency: 'CNY'}}
            </strong>
        </h5>
    </li>
</ul>
```

Then finally a cart item component that is the code for each cart component that is showed in the website.

```html
<body>
    <div class="cart-item" >
        <div fxLayout="row" class="items">
            <span fxFlex="60">{{cartItem.productName}} </span> <strong>x</strong>  <span> {{cartItem.qty}}: <b>{{cartItem.price * cartItem.qty}}</b> 
            </span>
            <a class="btn btn-outline-dark btn-floating m-1" role="button"
        (click)="remove()"><i class="fas fa-trash-alt"></i
        ></a>
        </div>
    </div>
</body>
```

And finally, the order component page. In this code I created a cart where the user is going to see the total and be able to see what items he bought and even be able to redeem a certain price from it. 

>     This is the end of my documentation
