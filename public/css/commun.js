body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 13px;
    line-height: 18px;
    color: #333;
}

#albums {
	width : 150px;
	float : left;
}
#center {
	width : 630px;
	float : left;
}
#right {
	min-width : 350px;
	max-width : 500px;
	float : right;
}
table {
    border-spacing: 0px;
}
.table-bordered th, .table-bordered td {
    border-left: 1px solid #DDD;
}
.table th, .table td {
    padding: 5px;
    line-height: 18px;
    text-align: left;
    vertical-align: top;
    border-top: 1px solid #DDD;
}
.table-bordered {
    border-width: 1px 1px 1px 0px;
    border-style: solid solid solid none;
    border-color: #DDD #DDD #DDD -moz-use-text-color;
    -moz-border-top-colors: none;
    -moz-border-right-colors: none;
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    border-image: none;
    border-radius: 4px;
    border-collapse: separate;
}
#center .table-bordered {
	width: 650px;
}
h1, h2, h3, h4, h5, h6 {
    margin: 0px;
}

.table td:hover {
	background-color: #C8CADD;
}
#right .table .song {
	padding-left:20px;
}

#right .current {
    background: url("../img/play.png") no-repeat scroll left center transparent;
}
h3 {
	text-align: center;
}
#center .ng-scope .link {
	padding-left:20px;
}
.btn {
    display: inline-block;
    padding: 4px 10px;
    margin-bottom: 0px;
    font-size: 13px;
    line-height: 18px;
    color: #333;
    text-align: center;
    text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.75);
    vertical-align: middle;
    cursor: pointer;
    background-color: #F5F5F5;
    background-image: -moz-linear-gradient(center top , #FFF, #E6E6E6);
    background-repeat: repeat-x;
    border-width: 1px;
    border-style: solid;
    -moz-border-top-colors: none;
    -moz-border-right-colors: none;
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    border-image: none;
    border-color: #E6E6E6 #E6E6E6 #B3B3B3;
    border-radius: 4px;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);
}
#musicplayer {
	margin-left: 80px;
}
