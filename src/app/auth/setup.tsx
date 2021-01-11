import React from "react";
import { useFormik } from "formik";
import { useMutation, gql } from "@apollo/client";
import { useAuth, storage, fbase, fana } from "../../hooks/use-auth";

export const SetupAccount = () => {
  const [userSetup] = useMutation(gql`
    mutation UserSetup($input: UserSetupInput!) {
      userSetup(input: $input) {
        status
        statusCode
        message
      }
    }
  `);

  const {
    state: { user },
    signout,
  }: any = useAuth();

  const formik: any = useFormik({
    initialValues: {
      type: "USER",
      countryCode: "94000",
      country: "Viet Nam",
      dial: "+84",
      fullName: user.displayName || "",
      avatarURL:
        "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/42518855_1070437466474838_255121452519391232_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=yYvomR-upV8AX8iLfL2&_nc_ht=scontent.fsgn5-6.fna&oh=c85cace4013c16849cc9836817567f0f&oe=601B1796",
      countryUser: "",
      phone: "",
    },
    onSubmit: async (values) => {
      try {
        formik.setSubmitting(true);
        const token: string = await user.getIdToken();
        console.log(token);
        const dataRes = await userSetup({
          variables: {
            input: {
              token,
              displayName: values.fullName,
              roles: values.type,
              avatarUrl: values.avatarURL,
              country: values.country,
              countryCode: values.countryCode,
              phone: values.phone,
              dialCode: values.dial,
            },
          },
        });
        console.log(dataRes);
        if (dataRes && dataRes.data.userSetup.status === "success") {
          await user.updateProfile({
            displayName: values.fullName,
            photoURL: values.avatarURL,
          });
          fbase
            .auth()
            .currentUser?.getIdToken(true)
            .then(function () {
              fana.setUserProperties({
                role: "USER",
              });
              return window.location.reload();
            })
            .catch(function (error) {
              console.log("Error!\n", error.message);
            });
        } else {
          console.log("Error on server backend!");
        }

        formik.setSubmitting(false);
      } catch (error) {
        console.log("Error!\n", error);
        formik.setSubmitting(false);
      }
    },
  });

  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          textAlign: "center",
          marginTop: "21px",
          fontSize: "26px",
        }}
      ></div>
      <form onSubmit={formik.handleSubmit}>
        <>
          <input
            required
            name="fullName"
            placeholder="First & last name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          <select
            required
            placeholder="Select country"
            onChange={({ value }: any) =>
              formik.setFieldValue("country", value)
            }
            value={formik.values.country === "" ? "" : formik.values.country}
          >
            <option value="Viet Nam">Viet Nam</option>
            <option value="Foreign">Foreign</option>
          </select>
          <div>
            <div>
              {/* <image name="avatar" href={formik.values.avatarURL} /> */}
            </div>
            Photo:
            <input
              required
              name="photoURL"
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={(e) => {
                console.log(storage);
                const uploadFiles = Array.from(e.target.files as FileList).map(
                  async (file: File) => {
                    const storageRef = storage.ref();
                    const ref = storageRef.child(
                      `users/${user.uid}/avatar/${file.name}`
                    );
                    const metadata = {
                      uid: user.uid,
                      size: file.size,
                      contentType: file.type,
                      name: file.name,
                    };
                    await ref.put(file, metadata);
                    const assetUrl = await ref.getDownloadURL();
                    return { ...metadata, assetUrl };
                  }
                );
                console.log(uploadFiles);
                Promise.all(uploadFiles)
                  .then(async (result) => {
                    formik.setFieldValue("photoURL", result[0].assetUrl);
                  })
                  .catch((error) => {
                    console.log(error.message);
                  });
              }}
            />
          </div>
          Phone:
          <input
            required
            value={formik.values.phone !== "" ? formik.values.phone : ""}
            onChange={(e) => {
              formik.setFieldValue("phone", e.currentTarget.value);
            }}
          />
          <button onClick={signout}>Not you</button>
          <button disabled={formik.isSubmitting} type="submit">
            Submit
          </button>
        </>
      </form>
    </div>
  );
};
