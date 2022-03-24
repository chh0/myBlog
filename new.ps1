$ErrorActionPreference ="Stop"

If ( $args[0] )
{
    cd src\mds\bin\lib
    node new.js $args[0]
    cd ../..
    code .
    code ("{0}.md" -f $args[0] )
    cd ../..
}
Else
{
    Write-Warning "Error : please add article name!"
}

