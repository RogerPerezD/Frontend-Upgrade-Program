// import cloudinary from 'cloudinary'
import { fileUpload } from '../../helpers/fileUpload';

// cloudinary.v2.config({ 
//     cloud_name: 'rogerchdk', 
//     api_key: '877339215562277', 
//     api_secret: 't8P0S4CB-aVjQrBV0cH1EAU-Syo'
// });

describe('test in fileUpload', () => { 

    test('should upload an image in Cloudinary',  async() => { 

        const resp = await fetch('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');
        const blob = await resp.blob()
        const file = new File( [blob],'image.jpg');

        const url: string = await fileUpload(file);

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1].replace('.jpg', '');

        
        // cloudinary.v2.api.delete_resources([imageId], {}, () => {
        //     done();
        // });
        
        expect( typeof url ).toBe('string');
    });

    test('should return an error if the image doesnt exist', async() => { 
        const file = new File([],'image.jpg');

        const url = await fileUpload(file);
        // console.log(url)

        expect( url ).toBe( null );
    })
})