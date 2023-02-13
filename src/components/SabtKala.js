import { useState } from "react";

const SabtKala =()=>{
    const[post,setPost]=useState({
        title:'',
        desc:'',
        photos:[]
    });
    const[highlight,setHighlight]= useState(false);
    const {title,desc,photos } = post;
    const handlechange= e=>{
        setPost({
            ...post,
            [e.target.name]:e.target.value
        })
    }
    const handlefilechange = e =>{
        let files=e.target.files;
        handfiles(files);
    }
    const handfiles= files=>{
        let photosArr=[];
        for(let file of files){
            let reader= new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener('load',()=>{
                let fileobj={
                    name:file.name,
                    type:file.type,
                    size:file.size,
                    src:reader.reault
                }
                photosArr.push(fileobj);
                setPost({
                    ...post,
                    photos: [...photos, ...photosArr]
                })
            });
        }
    }
    const handledelete = e=>{
        let target=e.target.parentElement;
        let targetindex=target.dataset.imgindex * 1;
        setPost({
            ...post,
            photos: [...photos.slice(0,targetindex), ...photos.slice(targetindex + 1)]
        })
    } 
    const handlehighlight = e=>{
        e.preventDefault();
        e.stopPropagation();
        setHighlight(true);
    }
    const handleunhighlight = e=>{
        e.preventDefault();
        e.stopPropagation();
        setHighlight(false);

    }
    const handledrop = e=>{
        e.preventDefault();
        e.stopPropagation();

        let dt=e.dataTransfer;
        let files = dt.files;
        setHighlight(false)
        handfiles(files);
        console.log(files)  
        
    }
    const newKala= [title,desc,photos]
    const submithandler = e =>{
        e.preventDefault();
        console.log(desc,title,photos)
        
    }
    return(
    <div className="file-upload">
        <h2 style={{textAlign:"center"}}>اطلاعات کالا را وارد کنید</h2>
        <form className="" encType= "multipart /form-data">
            <div className="custom-form-group" >
                <input className="forminput" type="text" name="title" placeholder="Enter Title..." value={title} onChange={handlechange}/>
            </div>
            <div className="custom-form-group">
                <input className="forminput" type="text" name="desc" placeholder="قیمت" value={desc} onChange={handlechange}/>
            </div>
            <div className="custom-form-group">
                <div className={highlight ? "custom-file-drop-area highlight" : "custom-file-drop-area"} onDragEnter={handlehighlight} onDragOver={handlehighlight} 
                onDragLeave={handleunhighlight} onDrop={handledrop}>
                    <input type="file"name="photos" placeholder="Enter photos" multiple id="filephotos" onChange={handlefilechange}/>
                    <label htmlFor="filephotos">Drag & Drop</label>
                </div>
                <div className="custom-file-preview">
                    {photos.length > 0 && photos.map((item,index) => (
                        <div class="prev-img" key={index} data-imgindex={index} >
                        <span onClick={handledelete}>&times;</span>
                        <img src={item.src} alt={item.name}/>
                        </div>
                    ))}
                </div>
            </div>
            <button type="submit" onClick={submithandler} className="btn-submit">Submit</button>
        </form>
        <div>
       

            {newKala.map((item)=>(
                <div>
                    <h1>{title}</h1>
                    <h2>{desc}</h2>
                    <section>{photos.size}</section>

                </div>
                
            ))}
        </div>
    </div>


    )
}

export default SabtKala;