import { useEffect, useState } from 'react'; 

const useDolbyAPI = () => {

    const [api_token, setApiToken] = useState('');
    const [jobId, setJobId] = useState('');
    const axios = require("axios").default;

    const authenticateAPI = async () => {

        if (api_token) {
            return;
        }

        console.log('authenticate');

        const auth = Buffer.from(`${'Da9qihF3IPyZ4bIBBUFA3Q=='}:${'-pCw_6p5KW-oQZa4SBJYIfAVLqY0d86ef7pQh_29qmA='}`).toString('base64');
        const response = await fetch('https://api.dolby.io/v1/auth/token', {
            method: 'POST',
            body: new URLSearchParams({
                grant_type: 'client_credentials',
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${auth}`
            }
        });
        const json = await response.json();

       setApiToken(json.access_token);
    }
    useEffect(() => {
        authenticateAPI();
    })

    const enhance = () => {
        console.log('enhance');

        const config = {
            method: "post",
            url: "https://api.dolby.com/media/enhance",
            "headers": {
                "Authorization": `Bearer ${api_token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            data: {
                input: "https://dolbyio.s3-us-west-1.amazonaws.com/public/shelby/tunnel.original.mp4",
                output: "dlb://video/enhanced.mp4",
            },
        };

        axios(config)
        .then(function(response: any) {
            console.log(response.data.job_id);
            setJobId(response.data.job_id);
        })
        .catch(function(error: any) {
            console.log(error);
        });

    }

    const status = () => {
        console.log('status', jobId)

        if (!jobId) {
            return;
        }

        const config = {
            method: "get",
            url: "https://api.dolby.com/media/enhance",
            "headers": {
                "Authorization": `Bearer ${api_token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                    
            params: {
                job_id: jobId
            },
        };

        axios(config)
        .then(function(response: any) {
            console.log(JSON.stringify(response.data, null, 4))
        })
        .catch(function(error: any) {
            console.log(error)
        });
    }

    const output = () => {
        console.log('output');

        const fs = require("fs");
        const output_path = 'enhanced.mp4';

        const config = {
            method: "get",
            url: "https://api.dolby.com/media/output",
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${api_token}`
              },
                    
            params: {
                url: "dlb://video/enhanced.mp4",
            },
        };

        axios
        .request(config)
        .then(function (response: any) {
            console.log(response.data);
        })
        .catch(function (error: any) {
            console.log(error);
        });

        // axios(config)
        // .then(function(response: any) {
        //     response.data.pipe(fs.createWriteStream(output_path))
        //     response.data.on("error", function(error: any) {
        //         console.log(error)
        //     })
        //     response.data.on("end", function() {
        //         console.log("File downloaded!")
        //     })
        // })
        // .catch(function(error: any) {
        //     console.log(error.request)
        // });
    }

    /*<?xml version=\"1.0\" encoding=\"UTF-8\"?>
    
    <Error><Code>InvalidArgument</Code><Message>Only one auth mechanism allowed; only the X-Amz-Algorithm query parameter, Signature query string parameter or the Authorization header should be specified</Message>
    
    <ArgumentName>Authorization</ArgumentName>
    <ArgumentValue>Bearer eyJ0eXAiOiJKV1QiLCJraWQiOiI1ODExQjE0RS1DQzVCLTQ4QkQtQTNEOC1DREQxQzUzQ0ZDNUMiLCJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJkb2xieS5pbyIsImlhdCI6MTY5MzA3MTg1NSwic3ViIjoiRGE5cWloRjNJUHlaNGJJQkJVRkEzUT09IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DVVNUT01FUiJdLCJ0YXJnZXQiOiJhcGkiLCJvaWQiOiIyYmQyNWVlNy02N2RmLTRjYmQtYjI3MS05MjliYTVhMWEyOTAiLCJhaWQiOiI3OGM0YzRjMi03NjhmLTQwZWUtODMxZC0zZmJmYjc3ZGE4MTIiLCJiaWQiOiI4YTM2ODBkZThhMmQzMDg2MDE4YTMyNWJiNmZjNjA2MCIsImV4cCI6MTY5MzA3MzY1NX0.TsbFqDQos30RL-Zvvu5QeTL02aAsw_bGLBaYQhjw8yIOxmFjfelNDFWS4V8zIDnEynQBfeE5vVYLpcHKa1SXWs_wrIT-4CKKn7Sn7uQq0zKrNycBMvm5fsAKQuDYpwFOC35M8Me7FkqwIUW-3gSdO_spdsRFpOcUd9KTrvlZuqXaWYUmZpwZcPeylkcaPQVsUuTumiZzQngo4wixBAC_Q9N0GoA87-U5SIzwQsjfph4TvVYSYf7aOI21SOHCF3O52Emwh9uWckIGnp1wCe4dc5s-nCgPz7igsTWgmLCQ07aeLqtnico-YlCy44RDIvIGkQxU6VNKXCMn2YUf3v3wEAjnayVqtp46iFeldXnNaB_9IyMoViupO5ZXwKJ4u9D68evXKhmApoPPFv4fsMBnwKVysXuCpl-e1DLNKGwo6bM4iZJZqdajrZai9aA5arp6g7mymknO9ioBg54AcPAzkhtzp4oR2G9FFVd1ZnVAuiFBroe3zSrJ6Yj_1r1HeCxUky0Ms8IBgDL_6NOr85aYl2ERpitVG2xjZVi4C9qR2Wa7V0clKiJUK339ddXv6W9ohssAAfK35JXDzQQZixObpHpCfp0527VL04Y2fNsVtbZOs3r8BGAgQFws-_9HeE0AYlFIOnnVfEA_Yca5ejq4ALUT0xMRxVtXEKcD37a1IHI</ArgumentValue>
    
    <RequestId>KR0NBYJVWAD6T7QA</RequestId>
    <HostId>EiatasHv0tprVWjYHSUR2lO7d2SV67jdNN1v/Xvm18QDXNLQtdVTAf9NWiz/1M0IdZbpVE2Aw8A=</HostId></Error>*/


    return {
        api_token,
        jobId,
        enhance,
        status,
        output
    }

}
export default useDolbyAPI;