<?php
// Use: echo decrypt("Hello");
function decrypt($str)
{
	return base64_decode($str);
}
