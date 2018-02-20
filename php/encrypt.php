<?php
// Use: echo encrypt("Hello");
function encrypt($str)
{
	return base64_encode($str);
}
