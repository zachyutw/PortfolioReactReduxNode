function localtunnel {
    lt -s zachemailydev6767 --port 5000
}
until localtunnel; do 
echo "localtunnel server crashed"
sleep 2
done