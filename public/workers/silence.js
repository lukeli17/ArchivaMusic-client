onmessage = async e => {
    const { ending_trackhash, ending_file, starting_trackhash, starting_file } = e.data

    const is_dev = location.port === '7019'
    const base_url = is_dev ? 'http://localhost:7018' : location.origin
    const url = base_url + '/file/silence'

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ending_trackhash, ending_file, starting_trackhash, starting_file }),
        credentials: 'include',
    })

    const data = await res.json()
    postMessage(data)
}
